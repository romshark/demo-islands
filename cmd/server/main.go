package main

import (
	"errors"
	"flag"
	"log/slog"
	"net/http"
	"os"

	"github.com/romshark/htmx-demo-form/server"
)

func main() {
	fHost := flag.String("host", ":8080", "host address")
	fGZIP := flag.Bool("gzip", false, "enable gzip compression")
	flag.Parse()

	logAccess, logError := slog.Default(), slog.Default()

	_, devMode := os.LookupEnv("DEV")
	s := server.New(logAccess, logError, server.Config{
		ProductionMode:        !devMode,
		EnableGZIPCompression: *fGZIP,
	})

	tlsCert := os.Getenv("TLS_CERT")
	tlsKey := os.Getenv("TLS_KEY")

	{
		initLog := slog.With(
			slog.String("host", *fHost),
			slog.Bool("gzip", *fGZIP),
			slog.Bool("productionMode", !devMode),
		)
		if tlsCert != "" && tlsKey != "" {
			initLog = initLog.With(
				slog.String("tls.cert", tlsCert),
				slog.String("tls.key", tlsKey),
			)
		}
		initLog.Info("listening")
	}

	if tlsCert != "" && tlsKey != "" {
		if err := http.ListenAndServeTLS(
			*fHost, tlsCert, tlsKey, s,
		); err != nil {
			if !errors.Is(err, http.ErrServerClosed) {
				slog.Error("serving HTTPS", slog.Any("error", err))
			}
		}
	} else {
		if err := http.ListenAndServe(*fHost, s); err != nil {
			if !errors.Is(err, http.ErrServerClosed) {
				slog.Error("serving HTTP", slog.Any("error", err))
			}
		}
	}
}
