import CountryFlag from "./countryflag";

import "@shoelace-style/shoelace";

const defineCustom = (name: string, c: CustomElementConstructor) => {
  // "slx-" is short for "shoelace extension".
  customElements.define("slx-" + name, c);
};

defineCustom("countryflag", CountryFlag);

// Icons are copied from:
// https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath("/public/");
