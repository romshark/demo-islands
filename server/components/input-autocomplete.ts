import { LitElement, html, css } from "lit";
import { property, state, query } from "lit/decorators.js";
import {
  SlBlurEvent,
  SlChangeEvent,
  SlDropdown,
  SlInput,
  SlInputEvent,
  SlSelectEvent,
} from "@shoelace-style/shoelace";

export default class InputAutocomplete extends LitElement {
  @property({ type: String }) label = "";
  @property({ type: String, attribute: "help-text" }) helpText = "";
  @property({ type: String, attribute: "no-results-text" }) noResultsText =
    "No Results";
  @property({ type: String }) placeholder = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String, attribute: "json-api-endpoint" }) jsonAPIEndpoint =
    "";
  @property({ type: Number, attribute: "debounce-ms" }) debounceMS = 0;
  @property({ type: String }) name = "";
  @property({ type: String }) value = "";

  @query("sl-input") elInput!: SlInput;
  @query("sl-dropdown") elDropdown!: SlDropdown;

  @state() data: Array<string> = [];
  @state() currentInput: string = "";
  @state() loadingAutocompletion: boolean = false;

  static formAssociated = true;
  static styles = css`
    :host {
      display: inline-block;
      width: 100%;
    }
    sl-dropdown {
      width: 100%;
    }
  `;

  #endpointURL: URL | null = null;
  #debounceTimer = null as ReturnType<typeof setTimeout> | null;
  #internals: ElementInternals | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.#internals = this.attachInternals();
    this.#endpointURL = new URL(
      `${window.location.origin}/${this.jsonAPIEndpoint}`
    );
    if (this.debounceMS <= 0) {
      this.debounceMS = 100; // Default 100ms
    }
  }

  protected willUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ) {
    if (changedProperties.has("value")) {
      this.currentInput = this.value || "";
      this.#internals?.setFormValue(this.currentInput);
    }
  }

  async #showSuggestions() {
    try {
      this.loadingAutocompletion = true;
      this.#endpointURL?.searchParams.set("name", this.currentInput);
      const response = await fetch(this.#endpointURL as URL);
      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
      }
      const data = await response.json();
      if (
        Array.isArray(data) &&
        data.every((item) => typeof item === "string")
      ) {
        this.data = data;
      } else {
        console.error(
          "unexpected data format: expected a JSON array of strings."
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      this.loadingAutocompletion = false;
    }
  }

  #onSelect(e: SlSelectEvent) {
    this.currentInput = e.detail.item.value;
    this.#internals?.setFormValue(this.currentInput);
    this.elDropdown.hide();
  }

  #loadSuggestions() {
    this.elDropdown?.show();
    this.loadingAutocompletion = true;

    this.currentInput = this.elInput.value;
    if (this.currentInput == "") {
      return;
    }
    if (this.#debounceTimer) {
      clearTimeout(this.#debounceTimer);
    }
    this.#debounceTimer = setTimeout(() => {
      this.#showSuggestions();
      this.#debounceTimer = null;
    }, this.debounceMS);
  }

  #onBlur() {
    // Delay checking focus to account for browser timing quirks
    setTimeout(() => {
      const isFocusInside =
        this.contains(document.activeElement) &&
        document.activeElement !== this.elInput;
      if (isFocusInside) {
        return;
      }
      // Focus moved outside the entire component.
      this.#emitSelectEvent();
    });
  }

  #onInput(e: SlInputEvent) {
    // Reopen the dropdown if it's closed.
    this.#loadSuggestions();
  }

  #onInputClicked(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  #emitSelectEvent() {
    if (this.currentInput) {
      this.#internals?.setFormValue(this.currentInput);
      this.dispatchEvent(
        new CustomEvent("sl-select", {
          detail: {
            item: {
              value: this.currentInput,
              textContent: this.currentInput,
            },
          },
          bubbles: true,
          composed: true,
        })
      );
      this.elDropdown.hide();
    }
  }

  #renderMenuItems() {
    if (this.currentInput == "") {
      return;
    }
    if (this.loadingAutocompletion) {
      return html`<sl-menu>
        <sl-menu-item loading tabindex="-1" aria-disabled="true"
          >Loading</sl-menu-item
        >
      </sl-menu>`;
    }
    if (this.data.length < 1) {
      return html`<sl-menu>
        <sl-menu-item disabled aria-disabled="true"
          >${this.noResultsText}</sl-menu-item
        >
      </sl-menu>`;
    }
    return html` <sl-menu @sl-select=${this.#onSelect}>
      ${this.data.map(
        (o) =>
          html`
            <sl-menu-item
              value=${o}
              @keydown=${(e: KeyboardEvent) => {
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                  case "Enter":
                  case "Tab":
                    return;
                }
                e.stopPropagation();
                e.preventDefault();
              }}
              >${o}</sl-menu-item
            >
          `
      )}
    </sl-menu>`;
  }

  // FIX: Clicking the label isn't focusing the input.
  protected override render() {
    return html`
      <sl-dropdown
        placement="bottom"
        distance="4"
        sync="width"
        @sl-blur=${this.#onBlur}
      >
        <sl-input
          label=${this.label}
          help-text=${this.helpText}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          slot="trigger"
          autocomplete="off"
          placeholder="Type to search..."
          @sl-input=${this.#onInput}
          @sl-change=${(e: SlChangeEvent) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          .name=${this.name}
          .value="${this.currentInput}"
          @click=${this.#onInputClicked}
          @sl-focus=${(e: Event) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === " ") {
              // Prevents the dropdown toggle when space is pressed.
              e.stopPropagation();
            } else if (e.key === "Enter") {
              this.#emitSelectEvent();
              e.stopPropagation();
            }
          }}
        ></sl-input>
        ${this.#renderMenuItems()}
      </sl-dropdown>
    `;
  }
}
