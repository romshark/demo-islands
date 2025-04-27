// Package middleware provides HTTP middlewares.
package middleware

import (
	"context"
	"io"
	"log/slog"
	"net/http"
	"time"

	"github.com/andybalholm/brotli"
)

// Compress enables brotli/gzip compression.
func Compress(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		wr := brotli.HTTPCompressor(w, r)
		defer func() {
			_ = wr.Close()
		}()
		next.ServeHTTP(compressedResponseWriter{ResponseWriter: w, w: wr}, r)
	})
}

type compressedResponseWriter struct {
	http.ResponseWriter
	w io.Writer
}

func (w compressedResponseWriter) Write(b []byte) (int, error) { return w.w.Write(b) }

// NoCache disables caching.
func NoCache(next http.Handler) http.Handler {
	expires := time.Unix(0, 0).Format(time.RFC1123)
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Delete any ETag headers.
		r.Header.Del("ETag")
		r.Header.Del("If-Modified-Since")
		r.Header.Del("If-Match")
		r.Header.Del("If-None-Match")
		r.Header.Del("If-Range")
		r.Header.Del("If-Unmodified-Since")

		// Set NoCache headers.
		w.Header().Set("Expires", expires)
		w.Header().Set("Cache-Control", "no-cache, private, max-age=0")
		w.Header().Set("Pragma", "no-cache")
		w.Header().Set("X-Accel-Expires", "0")

		next.ServeHTTP(w, r)
	})
}

type ctxKeyTheme struct{}

// Theme is the preferred user color theme.
type Theme int8

// ThemeDefault is the default color theme.
const ThemeDefault = ThemeLight

const (
	_ Theme = iota
	ThemeDark
	ThemeLight
)

// GetCtxTheme returns the color theme preferred by the client.
func GetCtxTheme(ctx context.Context) Theme {
	return ctx.Value(ctxKeyTheme{}).(Theme)
}

// UserPreferences sets the Accept-CH header and reads the user theme preference
// either from cookie (higher priority) or Sec-CH-Prefers-Color-Scheme (lower priority).
// The theme value is written to the request context and
// can be retrieved using GetCtxTheme.
//
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
func UserPreferences(log *slog.Logger, next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Tell the browser we're interested in receiveing the theme (dark/light)
		// preferences of the user to improve UX.
		w.Header().Set("Accept-CH", "Sec-CH-Prefers-Color-Scheme")

		theme := ThemeDefault // Default theme.
		themeFromCookie, err := getThemeCookie(r)
		if err != nil {
			log.Error("reading theme cookie", slog.Any("error", err))
		} else if themeFromCookie == "dark" {
			// Theme was explicitly set to dark via cookie.
			theme = ThemeDark
		} else if themeFromCookie == "light" {
			// Theme was explicitly set to light via cookie.
			theme = ThemeLight
		} else if r.Header.Get("Sec-CH-Prefers-Color-Scheme") == "dark" {
			// Couldn't determine preference by cookie, but a hint was sent.
			theme = ThemeDark
		}
		r = r.WithContext(context.WithValue(r.Context(), ctxKeyTheme{}, theme))
		next.ServeHTTP(w, r)
	})
}

func getThemeCookie(r *http.Request) (string, error) {
	themeCookie, err := r.Cookie("theme")
	if err != nil {
		if err == http.ErrNoCookie {
			return "", nil
		}
		return "", err
	}
	switch themeCookie.Value {
	case "dark", "light":
		return themeCookie.Value, nil
	}
	return "", nil
}
