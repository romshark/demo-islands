import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

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

  // Declare reactive properties
  @property()
  code: string = "CH"; // default to Switzerland

  @property({ type: Number })
  width: number = 32;

  @property({ type: Number })
  height?: number; // optional height, defaults to auto

  // Render the UI as a function of component state
  render() {
    const flagUrl = `https://flagcdn.com/${this.code.toLowerCase()}.svg`;

    return html`
      <div>
        <img
          src="${flagUrl}"
          alt="Flag of ${this.code}"
          width="${this.width}"
          height="${this.height || "auto"}"
        />
      </div>
    `;
  }
}
