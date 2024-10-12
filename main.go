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
	flag.Parse()

	logAccess, logError := slog.Default(), slog.Default()

	_, devMode := os.LookupEnv("DEV")
	s := server.New(logAccess, logError, !devMode)

	slog.Info("listening",
		slog.String("host", *fHost),
		slog.Bool("productionMode", !devMode))

	if err := http.ListenAndServe(*fHost, s); err != nil {
		if !errors.Is(err, http.ErrServerClosed) {
			slog.Error("serving HTTP", slog.Any("error", err))
		}
	}
}
