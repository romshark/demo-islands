package server

import (
	"embed"
	"encoding/json"
	"fmt"
	"log/slog"
	"net/http"
	"sort"
	"time"

	"github.com/brianvoe/gofakeit/v7"

	"github.com/romshark/demo-islands/domain"
	"github.com/romshark/demo-islands/internal/rand"
	"github.com/romshark/demo-islands/server/middleware"
	"github.com/romshark/demo-islands/server/template"
)

// embedDirPublic Embeds the public assets directory
//
//go:embed public/*
var embedDirPublic embed.FS

type Server struct {
	logAccess *slog.Logger
	logError  *slog.Logger
	m         *http.ServeMux

	// Pre-computed values.
	addressCountryOptions  []template.NamedOption
	shippingCompanyOptions []template.NamedOption

	store *Store
}

var _ http.Handler = new(Server)

type Config struct {
	ProductionMode    bool
	EnableCompression bool
}

func New(logAccess, logError *slog.Logger, conf Config) *Server {
	s := &Server{
		logAccess: logAccess,
		logError:  logError,
		m:         http.NewServeMux(),

		addressCountryOptions:  newAddressCountryOptions(),
		shippingCompanyOptions: newShippingCompanyOptions(),

		store: NewStore(),
	}

	var handlerPublicAssets http.Handler
	if conf.ProductionMode {
		// In production mode the files should be served from embedded public dir
		// to deploy a single static server binary without external dependencies.
		handlerPublicAssets = http.FileServerFS(embedDirPublic)
	} else {
		// In development mode the files should be served dynamically without caching
		// from the os filesystem to allow for faster reloads on source changes.
		handlerPublicAssets = middleware.NoCache(http.StripPrefix(
			"/public/", http.FileServer(http.Dir("./server/public/")),
		))
	}

	handler := func(h http.Handler) http.Handler {
		if conf.EnableCompression {
			return middleware.Compress(h)
		}
		return h
	}

	s.m.Handle("GET /autocomplete/city",
		handler(http.HandlerFunc(s.handleAutocompleteCity)))
	s.m.Handle("GET /public/",
		handler(handlerPublicAssets))
	s.m.Handle("GET /{$}",
		middleware.UserPreferences(
			logError,
			handler(http.HandlerFunc(s.handleGetIndex)),
		))
	s.m.Handle("POST /form/{$}",
		handler(http.HandlerFunc(s.handlePostForm)))
	s.m.Handle("POST /form/randomized/{$}",
		handler(http.HandlerFunc(s.handlePostFormRandomize)))
	s.m.Handle("POST /orders/{$}",
		middleware.UserPreferences(
			logError,
			handler(http.HandlerFunc(s.handlePostOrders)),
		))
	return s
}

func newAddressCountryOptions() []template.NamedOption {
	v := domain.DestinationCountryValues()
	o := make([]template.NamedOption, len(v))
	var translatedName string
	for i, country := range v {
		// Default translations.
		switch country.String() {
		case "DE":
			translatedName = "Germany"
		case "BE":
			translatedName = "Belgium"
		case "NL":
			translatedName = "Netherlands"
		case "FR":
			translatedName = "France"
		case "ES":
			translatedName = "Spain"
		case "PT":
			translatedName = "Portugal"
		case "GB":
			translatedName = "United Kingdom"
		case "LU":
			translatedName = "Luxembourg"
		case "CZ":
			translatedName = "Czech Republic"
		case "PL":
			translatedName = "Poland"
		case "AT":
			translatedName = "Austria"
		case "IT":
			translatedName = "Italy"
		case "SK":
			translatedName = "Slovakia"
		case "LT":
			translatedName = "Lithuania"
		case "LV":
			translatedName = "Latvia"
		case "EE":
			translatedName = "Estonia"
		case "SE":
			translatedName = "Sweden"
		case "NO":
			translatedName = "Norway"
		case "FI":
			translatedName = "Finland"
		case "DK":
			translatedName = "Denmark"
		case "HU":
			translatedName = "Hungary"
		case "IE":
			translatedName = "Ireland"
		}
		o[i] = template.NamedOption{
			Value: country.String(), Name: translatedName,
		}
	}
	// Sort options alphabetically by name.
	sort.Slice(o, func(i, j int) bool { return o[i].Name < o[j].Name })
	return o
}

func newShippingCompanyOptions() []template.NamedOption {
	v := domain.ShippingCompanyValues()
	o := make([]template.NamedOption, len(v))
	for i, c := range v {
		o[i] = template.NamedOption{
			Value: c.ID, Name: c.Name.String(),
		}
	}
	// Sort options alphabetically by name.
	sort.Slice(o, func(i, j int) bool { return o[i].Name < o[j].Name })
	return o
}

func (s *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.logAccess.Info("access",
		slog.String("method", r.Method),
		slog.String("path", r.URL.Path),
		slog.String("query", r.URL.Query().Encode()),
	)
	s.m.ServeHTTP(w, r)
}

func (s *Server) handleAutocompleteCity(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	suggestions := domain.AutocompleteCity(name, 10)
	if err := json.NewEncoder(w).Encode(suggestions); err != nil {
		s.errInternal(w, fmt.Errorf("encoding autocomplete city suggestions: %w", err))
		return
	}
}

// handleGetIndex handles "GET /" which returns the main homepage.
func (s *Server) handleGetIndex(w http.ResponseWriter, r *http.Request) {
	theme := middleware.GetCtxTheme(r.Context())

	searchQuery := r.FormValue("searchQuery")

	orders, err := s.fetchOrders(searchQuery)
	if err != nil {
		s.errInternal(w, err)
		return
	}

	totalOrdersAvailable, err := s.store.TotalOrdersAvailable()
	if err != nil {
		s.errInternal(w, err)
		return
	}

	if r.Header.Get("HX-Request") != "" {
		var f template.Form
		f.UnmarshalForm(r)
		f.ResetErrorsForZero()
		if err := template.RenderViewIndex(
			r.Context(), w, f, searchQuery,
			s.addressCountryOptions, s.shippingCompanyOptions,
			totalOrdersAvailable, orders,
		); err != nil {
			s.errInternal(w, err)
			return
		}
		return
	}

	// Blank page load.
	if err := template.RenderPageIndex(
		r.Context(), w, theme == middleware.ThemeDark,
		template.Form{}, searchQuery,
		s.addressCountryOptions, s.shippingCompanyOptions,
		totalOrdersAvailable, orders,
	); err != nil {
		s.errInternal(w, err)
		return
	}
}

// handlePostForm handles "POST /form/" which expects form inputs
// and returns the form components.
func (s *Server) handlePostForm(w http.ResponseWriter, r *http.Request) {
	var f template.Form
	f.UnmarshalForm(r)
	f.ResetErrorsForZero()

	if err := template.RenderComponentForm(
		r.Context(), w,
		f, s.addressCountryOptions, s.shippingCompanyOptions,
	); err != nil {
		s.errInternal(w, err)
		return
	}
}

// handlePostFormRandomize handles "POST /form/randomized/" which
// returns the form component with randomized input.
func (s *Server) handlePostFormRandomize(w http.ResponseWriter, r *http.Request) {
	var f template.Form
	shippingCompany := rand.Item(domain.ShippingCompanyValues())
	f.ValueShippingCompanyID = shippingCompany.ID
	f.ValueCompanyName = gofakeit.Company()
	if gofakeit.Bool() {
		f.ValueCompanyName += " " + gofakeit.CompanySuffix()
	}
	f.ValueFirstName = gofakeit.FirstName()
	f.ValueLastName = gofakeit.LastName()
	f.ValueEmail = gofakeit.Email()
	f.ValuePhone = "+" + gofakeit.Phone()
	f.ValueDue = time.Now().Add(rand.Dur(time.Hour, 30*24*time.Hour)).Format(time.DateOnly)
	if gofakeit.Bool() {
		f.ValueExpress = "true"
	}
	if gofakeit.Bool() {
		f.ValueSpecialNotes = gofakeit.LoremIpsumParagraph(1, 4, 20, "")
	}
	destinationCountry := rand.Item(domain.DestinationCountryValues())
	f.ValueAddressCountry = destinationCountry.String()
	f.ValueAddressCity = rand.Item(domain.Cities()).String()
	f.ValueAddressPostalCode = rand.String("ABCDEFGHIKLMNOPQ1234567890", 6, 9)

	if err := template.RenderComponentForm(
		r.Context(), w,
		f, s.addressCountryOptions, s.shippingCompanyOptions,
	); err != nil {
		s.errInternal(w, err)
		return
	}
}

// handlePostOrders handles "POST /orders/" which expects form inputs,
// adds a new shipping order if the inputs are valid and renders the main page.
func (s *Server) handlePostOrders(w http.ResponseWriter, r *http.Request) {
	var f template.Form
	f.UnmarshalForm(r)
	if f.IsValid() {
		// Add order and display empty form.
		newOrder := domain.ShippingDetails{
			CompanyName:      f.ParsedCompanyName,
			ContactFirstName: f.ParsedFirstName,
			ContactLastName:  f.ParsedLastName,
			ContactEmail:     f.ParsedEmail,
			ContactPhone:     f.ParsedPhone,
			DestinationAddress: domain.ShippingAddress{
				Country:    f.ParsedAddressCountry,
				City:       f.ParsedAddressCity,
				PostalCode: f.ParsedAddressPostalCode,
			},
			Articles:        nil,
			Express:         f.ParsedExpress,
			Due:             f.ParsedDue,
			ShippingCompany: f.ParsedShippingCompany,
			SpecialNotes:    f.ParsedSpecialNotes,
		}
		_, err := s.store.NewOrder(newOrder)
		if err != nil {
			s.errInternal(w, err)
			return
		}
		f = template.Form{}
	}

	searchQuery := r.FormValue("searchQuery")

	orders, err := s.fetchOrders(searchQuery)
	if err != nil {
		s.errInternal(w, err)
		return
	}

	totalOrdersAvailable, err := s.store.TotalOrdersAvailable()
	if err != nil {
		s.errInternal(w, err)
		return
	}

	if err := template.RenderViewIndex(
		r.Context(), w,
		f, searchQuery,
		s.addressCountryOptions, s.shippingCompanyOptions,
		totalOrdersAvailable, orders,
	); err != nil {
		s.errInternal(w, err)
		return
	}
}

func (s *Server) errInternal(w http.ResponseWriter, err error) {
	s.logError.Error("internal", slog.Any("error", err))
	http.Error(w,
		http.StatusText(http.StatusInternalServerError),
		http.StatusInternalServerError)
}

func (s *Server) fetchOrders(searchQuery string) (
	orders []domain.Order, err error,
) {
	if searchQuery != "" {
		return s.store.OrderBySearchQuery(searchQuery, 10)
	}
	return s.store.GetAllOrders()
}
