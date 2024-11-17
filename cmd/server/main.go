package main

import (
	"errors"
	"flag"
	"log/slog"
	"net/http"
	"os"

	"github.com/romshark/demo-islands/server"
	"github.com/rs/zerolog"
)

func main() {
	fHost := flag.String("host", ":8080", "host address")
	fCompress := flag.Bool(
		"compress",
		false,
		"enable gzip/brotli compression (brotli is preferred over gzip when available)",
	)
	flag.Parse()

	zerolog.TimeFieldFormat = zerolog.TimeFormatUnix
	logAccess, logError := zerolog.New(os.Stdout), zerolog.New(os.Stdout)

	_, devMode := os.LookupEnv("DEV")
	s := server.New(logAccess, logError, server.Config{
		ProductionMode:    !devMode,
		EnableCompression: *fCompress,
	})

	tlsCert := os.Getenv("TLS_CERT")
	tlsKey := os.Getenv("TLS_KEY")

	{
		initLog := slog.With(
			slog.String("host", *fHost),
			slog.Bool("compress", *fCompress),
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
