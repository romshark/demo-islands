#!/bin/sh

# This helper script runs the server in production mode.

if ! grep -q "^127\.0\.0\.1[[:space:]]\+islands\.demo" /etc/hosts; then
    echo 'Please add "127.0.0.1 islands.demo" to your hosts file (usually /etc/hosts)'
    exit 1
fi

./buildall.sh
if [ $? -ne 0 ]; then
    echo "building generated files failed"
    exit 1
fi

mkcert -install
mkcert islands.demo

# Create a temporary executable file
TEMP_BIN=$(mktemp)

# Compile the server
go build -o "$TEMP_BIN" ./cmd/server
if [ $? -ne 0 ]; then
    echo "Compilation failed."
    exit 1
fi

clear

# Run the server
TLS_CERT="islands.demo.pem" TLS_KEY="islands.demo-key.pem" \
    $TEMP_BIN -compress -host islands.demo:443
RUN_EXIT_CODE=$?

# Clean up the temp executable
rm -f "$TEMP_BIN"

# Exit with the same status code as the server
exit $RUN_EXIT_CODE
