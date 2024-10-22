import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

// Component CountryFlag displays a country flag SVG from https://flagpedia.net/.
export default class CountryFlag extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      color: blue;
    }

    img {
      display: block;
      height: auto;
    }
  `;

  @property({ type: String })
  code: string = "CH"; // Default to Switzerland 🇨🇭.

  @property({ type: Number })
  width: number = 32; // Default to 32 pixels.

  @property({ type: Number, reflect: true })
  height?: number; // Default to auto.

  @property({ type: String })
  baseURL: string = "https://flagcdn.com"; // Default to CDN.

  render() {
    const flagUrl = `${this.baseURL}/${this.code.toLowerCase()}.svg`;
    return html`
      <div>
        <img
          src="${flagUrl}"
          alt="Flag for country code ${this.code}"
          width="${this.width}"
          height="${this.height || "auto"}"
        />
      </div>
    `;
  }
}
