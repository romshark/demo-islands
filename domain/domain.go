// Package domain contains all business entities and logic
// immitating a real backend.
package domain

import (
	"errors"
	"regexp"
	"slices"
	"time"
)

type ShippingDetails struct {
	CompanyName        CompanyName
	ContactFirstName   Name
	ContactLastName    Name
	ContactEmail       Email
	ContactPhone       PhoneNumber
	DestinationAddress ShippingAddress
	Articles           []ArticleNumber
	Express            bool
	Due                time.Time
	ShippingCompany    ShippingCompanyName
	SpecialNotes       SpecialNotes
}

type ShippingAddress struct {
	Country    DestinationCountry
	City       Name
	PostalCode PostalCode
}

type PostalCode struct{ string }

func (p PostalCode) String() string { return p.string }

var ErrPostalCodeInvalid = errors.New("postal code invalid")

const PostalCodeLenMax = 20

func NewPostalCode(c string) (PostalCode, error) {
	if c == "" || len(c) > PostalCodeLenMax {
		return PostalCode{}, ErrPostalCodeInvalid
	}
	return PostalCode{c}, nil
}

type ArticleNumber struct{ uint64 }

var availableArticles = []ArticleNumber{
	{1255422213},
	{1255477823},
	{1255401801},
	{6225510001},
	{6225510002},
	{6225510003},
	{2782238292},
	{2882712365},
}

var ErrArticleNumberUnknown = errors.New("article number unknown")

func NewArticleNumber(a uint64) (ArticleNumber, error) {
	if !slices.Contains(availableArticles, ArticleNumber{a}) {
		return ArticleNumber{}, ErrArticleNumberUnknown
	}
	return ArticleNumber{a}, nil
}

type DestinationCountry struct {
	// code is the ISO-3166 Alpha-2 country code
	code string
}

func (d DestinationCountry) String() string { return d.code }

var supportedDestinationCountries = []DestinationCountry{
	{"DE"},
	{"BE"},
	{"NL"},
	{"FR"},
	{"ES"},
	{"PT"},
	{"GB"},
	{"LU"},
	{"CZ"},
	{"PL"},
	{"AT"},
	{"IT"},
	{"SK"},
	{"LT"},
	{"LV"},
	{"EE"},
	{"SE"},
	{"NO"},
	{"FI"},
	{"DK"},
	{"HU"},
	{"IE"},
}

var ErrDestinationCountryUnsupported = errors.New("destination country unsupported")

func NewDestinationCountry(codeAlpha2 string) (DestinationCountry, error) {
	if codeAlpha2 == "" ||
		!slices.Contains(supportedDestinationCountries, DestinationCountry{codeAlpha2}) {
		return DestinationCountry{}, ErrDestinationCountryUnsupported
	}
	return DestinationCountry{code: codeAlpha2}, nil
}

func DestinationCountryValues() []DestinationCountry {
	c := make([]DestinationCountry, len(supportedDestinationCountries))
	copy(c, supportedDestinationCountries)
	return c
}

type Name struct{ string }

func (n Name) String() string { return n.string }

const NameLenMax = 500

var ErrNameInvalid = errors.New("name invalid")

func NewName(n string) (Name, error) {
	if n == "" || len(n) > NameLenMax {
		return Name{}, ErrNameInvalid
	}
	return Name{n}, nil
}

type CompanyName = Name

var emailRegexp = regexp.MustCompile(`.+@.+\..+`)

type Email struct{ string }

func (e Email) String() string { return e.string }

const EmailLenMax = 1000

var ErrEmailInvalid = errors.New("email invalid")

func NewEmail(e string) (Email, error) {
	if e == "" || len(e) > EmailLenMax || !emailRegexp.MatchString(e) {
		return Email{}, ErrEmailInvalid
	}
	return Email{e}, nil
}

type PhoneNumber struct{ string }

func (p PhoneNumber) String() string { return p.string }

var e164Regex = regexp.MustCompile(`^\+[1-9]\d{1,14}$`)

var ErrPhoneNumberInvalid = errors.New("phone number invalid")

func NewPhoneNumber(p string) (PhoneNumber, error) {
	if p == "" || !e164Regex.MatchString(p) {
		return PhoneNumber{}, ErrPhoneNumberInvalid
	}
	return PhoneNumber{p}, nil
}

type ShippingCompany struct {
	ID   string
	Name ShippingCompanyName
}

type ShippingCompanyName struct{ string }

func (s ShippingCompanyName) String() string { return s.string }

var knownShippingCompanies = []ShippingCompany{
	{
		ID:   "swift_and_sons",
		Name: ShippingCompanyName{"Swift & Sons"},
	},
	{
		ID:   "fastex_co",
		Name: ShippingCompanyName{"FastEx Co."},
	},
	{
		ID:   "logispeed_inc",
		Name: ShippingCompanyName{"LogiSpeed Inc."},
	},
}

func ShippingCompanyValues() []ShippingCompany {
	c := make([]ShippingCompany, len(knownShippingCompanies))
	copy(c, knownShippingCompanies)
	return c
}

var ErrShippingCompanyUnknown = errors.New("shipping company unknown")

func GetShippingCompanyByID(id string) (ShippingCompany, error) {
	for _, c := range knownShippingCompanies {
		if c.ID == id {
			return c, nil
		}
	}
	return ShippingCompany{}, ErrShippingCompanyUnknown
}

func NewShippingCompanyName(s string) (ShippingCompanyName, error) {
	if s == "" || !slices.ContainsFunc(
		knownShippingCompanies,
		func(sc ShippingCompany) bool {
			return sc.Name == ShippingCompanyName{s}
		},
	) {
		return ShippingCompanyName{}, ErrShippingCompanyUnknown
	}
	return ShippingCompanyName{s}, nil
}

type SpecialNotes struct{ string }

func (s SpecialNotes) String() string { return s.string }

const SpecialNotesRunesMax = 1000

var SpecialNotesTooLong = errors.New("special notes too long")

func NewSpecialNotes(s string) (SpecialNotes, error) {
	if len([]rune(s)) > SpecialNotesRunesMax {
		return SpecialNotes{}, SpecialNotesTooLong
	}
	return SpecialNotes{s}, nil
}
