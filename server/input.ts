import htmx from "htmx.org";
import Alpine from "alpinejs";

window.htmx = htmx;

declare global {
  interface Window {
    htmx: typeof htmx;
    app: App;
  }
}

interface App {
  testValue: string;
  theme: Theme | null;
  themeLinkEl: HTMLLinkElement | null;
  init(): void;
  setTheme(theme: Theme): void;
  applyTheme(): void;
}

// setLoadingIndicatorOn sets the hx-loading class on target
// and overlays it with a loading indicator element.
// The returned function can be used to undo those effects.
function setLoadingIndicatorOn(target: HTMLElement): () => void {
  target.classList.add("hx-loading");

  // Create the loading indicator element.
  const loadingIndicator = document.createElement("div");
  loadingIndicator.classList.add("hx-loading-indicator");
  (target.parentElement ?? document).appendChild(loadingIndicator);

  // Position the indicator to overlay the target element.
  const rect = target.getBoundingClientRect();
  loadingIndicator.style.position = "absolute";
  loadingIndicator.style.top = `${rect.top + window.scrollY}px`;
  loadingIndicator.style.left = `${rect.left + window.scrollX}px`;
  loadingIndicator.style.width = `${rect.width}px`;
  loadingIndicator.style.height = `${rect.height}px`;
  return () => {
    loadingIndicator.remove();
    target.classList.remove("hx-loading");
  };
}

// hxThresholdLoadingIndicator defines how long to wait before
// showing loading indication after an HTMX request was sent.
// If the request finishes fast (response time is below threshold)
// then no loading indication should be applied.
const hxThresholdLoadingIndicator = 220;

document.addEventListener("htmx:beforeRequest", function (event) {
  const target = (event as CustomEvent).detail.target;
  target.htmxTimeoutId = setTimeout(function () {
    target.disableLoadingIndication = setLoadingIndicatorOn(target);
  }, hxThresholdLoadingIndicator);
});

document.addEventListener("htmx:afterRequest", function (event) {
  const target = (event as CustomEvent).detail.target;

  // Clear the timeout if the request finishes before the threshold
  if (target.htmxTimeoutId) {
    clearTimeout(target.htmxTimeoutId);
    target.htmxTimeoutId = null; // Clear the timeout ID
  }

  if (target.disableLoadingIndication) {
    target.disableLoadingIndication();
  }
});

function slOptionsReveal() {
  document
    .querySelectorAll("sl-option.hidden")
    .forEach((o) => o.classList.remove("hidden"));
}

// Reveal <sl-option> elements once the page is loaded or
// parts of the page are reloaded to avoid CLS (cumulative layout shift).
window.addEventListener("load", slOptionsReveal);
document.addEventListener("htmx:afterSwap", slOptionsReveal);

enum Theme {
  Light = "light",
  Dark = "dark",
}

const themes = {
  [Theme.Light]: {
    className: "sl-theme-light",
    url: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.18.0/cdn/themes/light.css",
  },
  [Theme.Dark]: {
    className: "sl-theme-dark",
    url: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.18.0/cdn/themes/dark.css",
  },
};

function getSystemTheme(): Theme {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return Theme.Dark;
  }
  return Theme.Light;
}

function setCookieTheme(theme: Theme) {
  switch (theme) {
    case Theme.Dark: {
      document.cookie = "theme=dark; path=/";
      break;
    }
    case Theme.Light: {
      document.cookie = "theme=light; path=/";
      break;
    }
  }
}

function removeCookieTheme() {
  document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function getCookieTheme(): Theme | null {
  const match = document.cookie.match(new RegExp(`(^| )theme=([^;]+)`));
  const themeValue = match ? decodeURIComponent(match[2]) : null;

  switch (themeValue) {
    case "dark":
      return Theme.Dark;
    case "light":
      return Theme.Light;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("alpine:init", () => {
    Alpine.data("app", () => ({
      testValue: "dark",
      theme: null as Theme | null,
      themeLinkEl: null as HTMLLinkElement | null,

      init() {
        this.theme = getCookieTheme();
        this.themeLinkEl = document.getElementById(
          "stylesheet-shoelace-theme"
        ) as HTMLLinkElement;
        switch (this.theme) {
          case Theme.Light: {
            this.$refs.themeSelect.setAttribute("value", "light");
            break;
          }
          case Theme.Dark: {
            this.$refs.themeSelect.setAttribute("value", "dark");
            break;
          }
          default: {
            this.$refs.themeSelect.setAttribute("value", "");
            break;
          }
        }

        // Watch for changes to the system preference.
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", () => {
            if (this.theme == null) {
              this.applyTheme();
            }
          });

        // Expose the app component to the window API.
        window.app = this;
      },

      setTheme(theme: Theme) {
        if (Object.values(Theme).includes(theme)) {
          setCookieTheme(theme);
          this.theme = theme;
        } else {
          removeCookieTheme();
          this.theme = null;
        }
        this.applyTheme();
      },

      applyTheme() {
        const current = this.theme ?? getSystemTheme();

        // Set Shoelace theme by creating and inserting a new link element for the theme.
        // Then switch the body class.
        const newEl = document.createElement("link");
        newEl.setAttribute("rel", "stylesheet");
        newEl.setAttribute("href", themes[current].url);
        document.head.appendChild(newEl);

        newEl.addEventListener(
          "load",
          () => {
            // Switch styles.
            document.documentElement.classList.remove(
              themes[Theme.Light].className,
              themes[Theme.Dark].className
            );
            document.documentElement.classList.add(themes[current].className);
            this.themeLinkEl?.remove();
            this.themeLinkEl = newEl;

            // Switch TailwindCSS theme.
            if (current === Theme.Dark) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          },
          { once: true }
        );

        newEl.addEventListener(
          "error",
          () => {
            console.error(`failed loading theme ${current}`);
          },
          { once: true }
        );
      },
    }));
  });

  Alpine.start();
});
