package server_test

import (
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"github.com/romshark/demo-islands/server"
	"github.com/rs/zerolog"
)

func BenchmarkServer(b *testing.B) {
	logAccess := zerolog.New(os.Stdout)
	logErr := zerolog.New(os.Stdout)
	s := server.New(logAccess, logErr, server.Config{
		ProductionMode:    true,
		EnableCompression: true,
	})
	request := httptest.NewRequest(http.MethodGet, "/", nil)
	b.RunParallel(func(p *testing.PB) {
		for p.Next() {
			responseRecorder := httptest.NewRecorder()
			s.ServeHTTP(responseRecorder, request)
		}
	})
}
