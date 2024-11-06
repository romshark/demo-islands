echo "\n--- Bun Install"
bun i

echo "\n--- Build Components"
bun run build:components

echo "\n--- Build TypeScript"
bun run build:ts

echo "\n--- Build CSS"
bun run build:css

echo "\n--- Generate Templ Templates"
templ generate
