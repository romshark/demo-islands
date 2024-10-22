# Demo: Islands

This tech-demo demonstrates a web frontend application written in Go and TypeScript
following the
[Islands of Interactivity](https://www.patterns.dev/vanilla/islands-architecture/)
architectural approach to building highly maintainable modern web applications using
a cutting-edge tech stack:

- **Templating**
  - [Templ](https://github.com/a-h/templ) for fast and convenient
    server-side templating in Go.
- **Dev Tools**
  - [Templiér](https://github.com/romshark/templier) for hot-reloads in dev mode. ♻️
  - [Bun](https://bun.sh/) for TypeScript bundling and JS package management.
  - [Lit](https://lit.dev/) for building maintainable and fast web components.
- **Frontend**
  - [TailwindCSS](https://tailwindcss.com/) for easy styling.
  - [Shoelace](https://shoelace.style/) for reusable and extensible web components.
  - [ESLint](https://eslint.org/) for JavaScript/TypeScript linting.
- **CI/CD**
  - [GitHub Actions](https://github.com/features/actions) for CI/CD.

## How To

### Development

Run Témplier to enable automatic hot-reload on source changes:

```sh
./dev.sh
```

Then navigate to http://127.0.0.1:7331.

ℹ️ Use http://127.0.0.1:8080/ to access the actual application server without
the Templiér proxy (this will not auto-reload on changes).

### Downloading an Icon

This repository uses a subset of
[bootstrap-icons](https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/).
To copy an icon from the CDN and make it available in the public bundle,
use:

```sh
# This will download the person.svg bootstrap icon.
ICON=person bun run download:icon
```
