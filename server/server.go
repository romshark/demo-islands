package server

import (
	"embed"
	"log/slog"
	"net/http"
	"sort"

	"github.com/romshark/htmx-demo-form/domain"
	"github.com/romshark/htmx-demo-form/server/template"
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

	// In-memory state of the world simulation.
	orders []domain.ShippingDetails
}

var _ http.Handler = new(Server)

func New(logAccess, logError *slog.Logger) *Server {
	s := &Server{
		logAccess: logAccess,
		logError:  logError,
		m:         http.NewServeMux(),

		addressCountryOptions:  newAddressCountryOptions(),
		shippingCompanyOptions: newShippingCompanyOptions(),
	}

	s.m.Handle("GET /public/", http.FileServer(http.FS(embedDirPublic)))
	s.m.Handle("GET /{$}", http.HandlerFunc(s.handleGetIndex))
	s.m.Handle("POST /form/{$}", http.HandlerFunc(s.handlePostForm))
	s.m.Handle("POST /orders/{$}", http.HandlerFunc(s.handlePostOrders))
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
	for i, country := range v {
		o[i] = template.NamedOption{
			Value: country.String(), Name: country.String(),
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

// handleGetIndex handles "GET /" which returns the main homepage.
func (s *Server) handleGetIndex(w http.ResponseWriter, r *http.Request) {
	if err := template.RenderPageIndex(
		r.Context(), w,
		template.Form{}, s.addressCountryOptions, s.shippingCompanyOptions, s.orders,
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

// handlePostOrders handles "POST /orders/" which expects form inputs,
// adds a new shipping order if the inputs are valid and renders the main page.
func (s *Server) handlePostOrders(w http.ResponseWriter, r *http.Request) {
	var f template.Form
	f.UnmarshalForm(r)
	if f.IsValid() {
		// Add order and display empty form.
		s.orders = append(s.orders, domain.ShippingDetails{
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
		})
		f = template.Form{}
	}
	if err := template.RenderViewIndex(
		r.Context(), w,
		f, s.addressCountryOptions, s.shippingCompanyOptions, s.orders,
	); err != nil {
		s.errInternal(w, err)
	}
}

func (s *Server) errInternal(w http.ResponseWriter, err error) {
	s.logError.Error("internal", slog.Any("error", err))
	http.Error(w,
		http.StatusText(http.StatusInternalServerError),
		http.StatusInternalServerError)
}
