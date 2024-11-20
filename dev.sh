#!/bin/sh

if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Installing dependencies..."
  bun i
fi

./buildall.sh
if [ $? -ne 0 ]; then
    echo "building generated files failed"
    exit 1
fi

clear

# DEV="true" sets the env var to enable development mode in the app server.
DEV="true" go run github.com/romshark/templier
