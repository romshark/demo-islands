#!/bin/sh

if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Installing dependencies..."
  bun i
fi

# DEV="" sets the env var to enable development mode in the app server.
DEV="true" go run github.com/romshark/templier
