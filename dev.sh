#!/bin/sh

if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Installing dependencies..."
  bun i
fi

echo "\n--- Build Components"
bun run build:components

echo "\n--- Build TypeScript"
bun run build:ts

echo "\n--- Build CSS"
bun run build:css

echo "\n--- Generate Templ Templates"
templ generate

# DEV="true" sets the env var to enable development mode in the app server.
DEV="true" go run github.com/romshark/templier
