import CountryFlag from "./countryflag";

const customElemName = (name: string) => "custom-" + name;

customElements.define(customElemName("countryflag"), CountryFlag);
