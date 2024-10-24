import htmx from "htmx.org";

window.htmx = htmx;

declare global {
  interface Window {
    htmx: typeof htmx;
  }
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
