import { LitElement, html, unsafeCSS } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js"; // eslint-disable-line import/extensions
import { classMap } from "lit/directives/class-map.js"; // eslint-disable-line import/extensions

import bannerStyles from "../_index.scss?inline";
import bannerComponentStyles from "./styles/_ethio-banner.component.css?inline";

import usFlagSmall from "./img/us_flag_small.png";
import iconDotGov from "./img/icon-dot-gov.svg";
import iconHttps from "./img/icon-https.svg";

/**
 * @summary The ethio-banner component.
 *
 * @attribute {string} lang - The element's language.
 * @attribute {string} label - The custom aria label users can override.
 * @attribute {string} tld - The top level domain for the site.
 *
 * @cssprop --theme-banner-text-color - Sets banner text color.
 * @cssprop --theme-banner-background-color - Sets banner background color.
 * @cssprop --theme-banner-font-family - Sets banner font family.
 * @cssprop --theme-banner-link-color - Sets the default link color.
 * @cssprop --theme-banner-chevron-color - Sets the default chevron color.
 * @cssprop --theme-banner-link-hover-color - Sets the default link color.
 *
 * @slot banner-text - The text for official government website text.
 * @slot banner-action - Action text label "Here's how you know."
 * @slot domain-heading - Heading text for the domain section.
 * @slot domain-text - Body text for domain section.
 * @slot https-heading - Heading for HTTPs section.
 * @slot https-text - Body text for HTTPs section.
 *
 * @tagname ethio-banner
 */

export default class ethioBanner extends LitElement {
  static properties = {
    lang: {
      type: String,
      reflect: true,
    },
    data: { attribute: false },
    isOpen: { type: Boolean },
    classes: {},
    label: { type: String },
    tld: {
      type: String,
      reflect: true,
    },
  };

  toggle() {
    this.isOpen = !this.isOpen;
    this.shadowRoot
      .querySelector(".ethio-banner__content")
      .toggleAttribute("hidden");
  }

  constructor() {
    super();
    this.lang = "en";
    this.isOpen = false;
    this.tld = "gov";

    this.data = {
      en: {
        banner: {
          label: "Official website of the United States government",
          text: "An official website of the United States government",
          action: "Here's how you know",
        },
        domain: {
          heading: "Official websites use",
          text1: "A",
          text2:
            "website belongs to an official government organization in the United States.",
        },
        https: {
          heading1: "Secure",
          heading2: "websites use HTTPS",
          text1: "A <strong>lock</strong>",
          text2:
            "or <strong>https://</strong> means you’ve safely connected to the",
          text3:
            "website. Share sensitive information only on official, secure websites.",
        },
      },
      es: {
        banner: {
          label: "Un sitio oficial del Gobierno de Estados Unidos",
          text: "Un sitio oficial del Gobierno de Estados Unidos",
          action: "Así es como usted puede verificarlo",
        },
        domain: {
          heading: "Los sitios web oficiales ethion",
          text1: "Un sitio web",
          text2:
            "pertenece a una organización oficial del Gobierno de Estados Unidos.",
        },
        https: {
          heading1: "Los sitios web seguros",
          heading2: "ethion HTTPS",
          text1: "Un <strong>candado</strong>",
          text2:
            "o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web",
          text3:
            "Comparta información sensible sólo en sitios web oficiales y seguros.",
        },
      },
    };
  }

  // Get English or Spanish strings. Default to English if an unknown `lang` is passed.
  // Ex: <ethio-banner lang="zy"></ethio-banner>
  get _bannerText() {
    const content = this.data[this.lang] || this.data.en;
    return content;
  }

  // Get the action text and use for both mobile & desktop buttons.
  get _actionText() {
    const bannerActionText = this.querySelector('[slot="banner-action"]');

    return bannerActionText?.textContent;
  }

  domainTemplate(tld) {
    const { domain } = this._bannerText;

    return html`
      <img
        class="ethio-banner__icon ethio-media-block__img"
        src="${iconDotGov}"
        role="img"
        alt=""
        aria-hidden="true"
      />
      <div class="ethio-media-block__body">
        <p>
          <strong>
            <slot name="domain-heading"> ${domain.heading} .${tld} </slot>
          </strong>
          <br />
          <slot name="domain-text">
            ${domain.text1} <strong>.${tld}</strong> ${domain.text2}
          </slot>
        </p>
      </div>
    `;
  }

  static lockIcon() {
    return html`
      <span
        class="ethio-banner__icon-lock"
        role="img"
        aria-label="Locked padlock icon"
        part="lock-icon"
      ></span>
    `;
  }

  httpsTemplate(tld) {
    const { https } = this._bannerText;

    return html`
      <img
        class="ethio-banner__icon ethio-media-block__img"
        src="${iconHttps}"
        role="img"
        alt=""
        aria-hidden="true"
      />
      <div class="ethio-media-block__body">
        <p>
          <strong>
            <slot name="https-heading">
              ${https.heading1} .${tld} ${https.heading2}
            </slot> </strong
          ><br />
          <slot name="https-text">
            ${unsafeHTML(https.text1)} (${ethioBanner.lockIcon()})
            ${unsafeHTML(https.text2)} .${tld} ${https.text3}
          </slot>
        </p>
      </div>
    `;
  }

  static styles = [unsafeCSS(bannerStyles), unsafeCSS(bannerComponentStyles)];

  render() {
    const classes = { "ethio-banner__header--expanded": this.isOpen };
    // ? Is there a better way to fallback to a default value if passed value doesn't match?
    // Example: User passes `tld="zzz"` --> uses "gov" domain instead of `zzz`.
    const tld = this.tld === "mil" ? "mil" : "gov";
    const { banner } = this._bannerText;

    return html`
      <section class="ethio-banner" aria-label=${this.label || banner.label}>
        <div class="ethio-accordion">
          <header class="ethio-banner__header ${classMap(classes)}">
            <div class="ethio-banner__inner">
              <div class="grid-col-auto">
                <img
                  aria-hidden="true"
                  class="ethio-banner__header-flag"
                  src=${usFlagSmall}
                  alt=""
                />
              </div>
              <div
                class="grid-col-fill tablet:grid-col-auto"
                aria-hidden="true"
              >
                <p class="ethio-banner__header-text">
                  <slot name="banner-text">${banner.text}</slot>
                </p>
                <p class="ethio-banner__header-action">
                  <slot name="banner-action">${banner.action}</slot>
                </p>
              </div>
              <button
                type="button"
                class="ethio-accordion__button ethio-banner__button"
                aria-expanded="${this.isOpen}"
                aria-controls="gov-banner-default"
                @click="${this.toggle}"
              >
                <span class="ethio-banner__button-text">
                  ${this._actionText || banner.action}
                </span>
              </button>
            </div>
          </header>
          <div class="ethio-banner__content ethio-accordion__content" hidden>
            <div class="grid-row grid-gap-lg">
              <div class="ethio-banner__guidance tablet:grid-col-6">
                ${this.domainTemplate(tld)}
              </div>
              <div class="ethio-banner__guidance tablet:grid-col-6">
                ${this.httpsTemplate(tld)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("ethio-banner", ethioBanner);
