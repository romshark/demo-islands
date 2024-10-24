// Package middleware provides HTTP middlewares.
package middleware

import (
	"io"
	"net/http"
	"time"

	"github.com/andybalholm/brotli"
)

// Compress enables brotli/gzip compression.
func Compress(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		wr := brotli.HTTPCompressor(w, r)
		defer wr.Close()
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
