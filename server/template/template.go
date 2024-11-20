package template

import (
	"context"
	"io"
	"time"

	"github.com/romshark/demo-islands/domain"
)

func RenderPageIndex(
	ctx context.Context, w io.Writer,
	darkMode bool,
	form Form,
	searchQuery string,
	addressCountryOptions []NamedOption,
	shippingCompanyOptions []NamedOption,
	orders []domain.ShippingDetails,
) error {
	return pageIndex(
		form, searchQuery, darkMode,
		addressCountryOptions, shippingCompanyOptions, orders,
	).Render(ctx, w)
}

func RenderViewIndex(
	ctx context.Context, w io.Writer,
	form Form,
	searchQuery string,
	addressCountryOptions []NamedOption,
	shippingCompanyOptions []NamedOption,
	orders []domain.ShippingDetails,
) error {
	return viewIndex(
		form, searchQuery, addressCountryOptions, shippingCompanyOptions, orders,
	).Render(ctx, w)
}

func RenderComponentForm(
	ctx context.Context, w io.Writer,
	form Form,
	addressCountryOptions []NamedOption,
	shippingCompanyOptions []NamedOption,
) error {
	return componentOrderForm(
		form, addressCountryOptions, shippingCompanyOptions,
	).Render(ctx, w)
}

type (
	NamedOption struct{ Name, Value string }
)

type Form struct {
	ValueShippingCompanyID string
	ValueCompanyName       string
	ValueFirstName         string
	ValueLastName          string
	ValueEmail             string
	ValuePhone             string
	ValueDue               string
	ValueExpress           string
	ValueSpecialNotes      string
	ValueAddressCountry    string
	ValueAddressCity       string
	ValueAddressPostalCode string

	ParsedShippingCompany   domain.ShippingCompanyName
	ParsedCompanyName       domain.CompanyName
	ParsedFirstName         domain.Name
	ParsedLastName          domain.Name
	ParsedEmail             domain.Email
	ParsedPhone             domain.PhoneNumber
	ParsedDue               time.Time
	ParsedExpress           bool
	ParsedSpecialNotes      domain.SpecialNotes
	ParsedAddressCountry    domain.DestinationCountry
	ParsedAddressCity       domain.CityName
	ParsedAddressPostalCode domain.PostalCode

	ErrorShippingCompany   string
	ErrorCompanyName       string
	ErrorFirstName         string
	ErrorLastName          string
	ErrorEmail             string
	ErrorPhone             string
	ErrorDue               string
	ErrorSpecialNotes      string
	ErrorAddressCountry    string
	ErrorAddressCity       string
	ErrorAddressPostalCode string
}

func (f *Form) UnmarshalForm(source interface{ FormValue(string) string }) {
	var err error

	f.ValueShippingCompanyID = source.FormValue("shippingCompany")
	f.ValueCompanyName = source.FormValue("companyName")
	f.ValueFirstName = source.FormValue("firstName")
	f.ValueLastName = source.FormValue("lastName")
	f.ValueEmail = source.FormValue("email")
	f.ValuePhone = source.FormValue("phone")
	f.ValueDue = source.FormValue("due")
	f.ValueExpress = source.FormValue("express")
	f.ValueSpecialNotes = source.FormValue("specialNotes")
	f.ValueAddressCountry = source.FormValue("addressCountry")
	f.ValueAddressCity = source.FormValue("addressCity")
	f.ValueAddressPostalCode = source.FormValue("addressPostalCode")

	if f.ParsedCompanyName, err = domain.NewName(f.ValueCompanyName); err != nil {
		f.ErrorCompanyName = err.Error()
	}

	if f.ParsedFirstName, err = domain.NewName(f.ValueFirstName); err != nil {
		f.ErrorFirstName = err.Error()
	}

	if f.ParsedLastName, err = domain.NewName(f.ValueLastName); err != nil {
		f.ErrorLastName = err.Error()
	}

	if f.ParsedEmail, err = domain.NewEmail(f.ValueEmail); err != nil {
		f.ErrorEmail = err.Error()
	}

	if f.ParsedPhone, err = domain.NewPhoneNumber(f.ValuePhone); err != nil {
		f.ErrorPhone = err.Error()
	}

	if f.ParsedDue, err = time.Parse("2006-01-02", f.ValueDue); err != nil {
		f.ErrorDue = err.Error()
	} else if time.Now().Unix() > f.ParsedDue.Unix() {
		f.ErrorDue = "due date is in the past"
	}

	if shippingCompany, err := domain.GetShippingCompanyByID(
		f.ValueShippingCompanyID,
	); err == nil {
		f.ParsedShippingCompany = shippingCompany.Name
	} else {
		f.ErrorShippingCompany = err.Error()
	}

	if f.ValueExpress == "on" {
		f.ParsedExpress = true
	} else {
		f.ParsedExpress = false
	}

	if f.ParsedSpecialNotes, err = domain.NewSpecialNotes(
		f.ValueSpecialNotes,
	); err != nil {
		f.ErrorSpecialNotes = err.Error()
	}

	if f.ParsedAddressCountry, err = domain.NewDestinationCountry(
		f.ValueAddressCountry,
	); err != nil {
		f.ErrorAddressCountry = err.Error()
	}

	if f.ParsedAddressCity, err = domain.NewCityName(
		f.ValueAddressCity,
	); err != nil {
		f.ErrorAddressCity = err.Error()
	}

	if f.ParsedAddressPostalCode, err = domain.NewPostalCode(
		f.ValueAddressPostalCode,
	); err != nil {
		f.ErrorAddressPostalCode = err.Error()
	}
}

func (f *Form) ResetErrorsForZero() {
	if f.ValueCompanyName == "" {
		f.ErrorCompanyName = ""
	}
	if f.ValueFirstName == "" {
		f.ErrorFirstName = ""
	}
	if f.ValueLastName == "" {
		f.ErrorLastName = ""
	}
	if f.ValueEmail == "" {
		f.ErrorEmail = ""
	}
	if f.ValuePhone == "" {
		f.ErrorPhone = ""
	}
	if f.ValueDue == "" {
		f.ErrorDue = ""
	}
	if f.ValueShippingCompanyID == "" {
		f.ErrorShippingCompany = ""
	}
	if f.ValueSpecialNotes == "" {
		f.ErrorSpecialNotes = ""
	}
	if f.ValueAddressCountry == "" {
		f.ErrorAddressCountry = ""
	}
	if f.ValueAddressCity == "" {
		f.ErrorAddressCity = ""
	}
	if f.ValueAddressPostalCode == "" {
		f.ErrorAddressPostalCode = ""
	}
}

func (f *Form) IsValid() bool {
	if f.ValueCompanyName == "" ||
		f.ValueFirstName == "" ||
		f.ValueLastName == "" ||
		f.ValueEmail == "" ||
		f.ValuePhone == "" ||
		f.ValueDue == "" ||
		f.ValueShippingCompanyID == "" ||
		f.ValueAddressCountry == "" ||
		f.ValueAddressCity == "" ||
		f.ValueAddressPostalCode == "" {
		return false
	}

	return !(f.ErrorCompanyName != "" ||
		f.ErrorFirstName != "" ||
		f.ErrorLastName != "" ||
		f.ErrorEmail != "" ||
		f.ErrorPhone != "" ||
		f.ErrorDue != "" ||
		f.ErrorShippingCompany != "" ||
		f.ErrorAddressCountry != "" ||
		f.ErrorAddressCity != "" ||
		f.ErrorAddressPostalCode != "" ||
		f.ErrorSpecialNotes != "")
}
