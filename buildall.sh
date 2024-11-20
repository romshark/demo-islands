#!/bin/bash

run() {
    echo -e "\n--- $1"
    $2
    if [ $? -ne 0 ]; then
        echo "$1 failed."
        exit 1
    fi
}

run "Bun Install"\
    "bun i"
run "Build Components"\
    "bun run build:components"
run "Build TypeScript"\
    "bun run build:ts"
run "Build CSS"\
    "bun run build:css"
run "Generate Templ Templates"\
    "templ generate"
