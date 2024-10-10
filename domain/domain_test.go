package domain_test

import (
	"testing"

	"github.com/romshark/htmx-demo-form/domain"

	"github.com/stretchr/testify/require"
)

func TestNewEmail(t *testing.T) {
	f := func(t *testing.T, expect string, expectErr error, input string) {
		a, err := domain.NewEmail(input)
		require.Equal(t, expectErr, err)
		require.Equal(t, expect, a.String())
	}

	f(t, "example@mail.com", nil, "example@mail.com")
	f(t, "a@b.c", nil, "a@b.c")

	f(t, "", domain.ErrEmailInvalid, "invalid")
	f(t, "", domain.ErrEmailInvalid, "")
	f(t, "", domain.ErrEmailInvalid, "@")
}
