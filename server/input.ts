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

// hxThresholdLoadingIndicator defines how long to wait before
// showing loading indication after an HTMX request was sent.
// If the request finishes fast (response time is below threshold)
// then no loading indication should be applied.
const hxThresholdLoadingIndicator = 150;

document.addEventListener("htmx:beforeRequest", function (event) {
  const target = (event as CustomEvent).detail.target;
  target.htmxTimeoutId = setTimeout(function () {
    target.classList.add("non-interactable");
  }, hxThresholdLoadingIndicator);
});

document.addEventListener("htmx:afterRequest", function (event) {
  const target = (event as CustomEvent).detail.target;

  // Clear the timeout if the request finishes before the threshold
  if (target.htmxTimeoutId) {
    clearTimeout(target.htmxTimeoutId);
    target.htmxTimeoutId = null; // Clear the timeout ID
  }

  // Remove the class (just in case it was applied)
  target.classList.remove("non-interactable");
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

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("alpine:init", () => {
    Alpine.data("app", () => ({
      testValue: "dark",
      theme: null as Theme | null,
      themeLinkEl: null as HTMLLinkElement | null,

      init() {
        const themeSetting = localStorage.getItem("theme");
        switch (themeSetting) {
          case "light":
            this.$refs.themeSelect.setAttribute("value", "light");
            this.theme = Theme.Light;
            break;
          case "dark":
            this.$refs.themeSelect.setAttribute("value", "dark");
            this.theme = Theme.Dark;
            break;
          default:
            this.$refs.themeSelect.setAttribute("value", "");
            break;
        }
        this.applyTheme();

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
          localStorage.setItem("theme", theme);
          this.theme = theme;
        } else {
          localStorage.removeItem("theme");
          this.theme = null;
        }
        this.applyTheme();
      },

      applyTheme() {
        const current = this.theme ?? getSystemTheme();

        // Create and insert a new link element for the theme.
        const newEl = document.createElement("link");
        newEl.setAttribute("rel", "stylesheet");
        newEl.setAttribute("href", themes[current].url);
        document.head.appendChild(newEl);

        newEl.addEventListener(
          "load",
          () => {
            // Switch styles.
            document.body.classList.remove(
              themes[Theme.Light].className,
              themes[Theme.Dark].className
            );
            document.body.classList.add(themes[current].className);
            this.themeLinkEl?.remove();
            this.themeLinkEl = newEl;
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
