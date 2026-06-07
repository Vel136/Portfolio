/**
 * Banner.js — Hero banner component
 * Renders the full-screen hero section with brand name and glow effect.
 */

class Banner {
  /**
   * @param {Object} config - Brand config from SiteConfig
   * @param {string} config.name
   * @param {string} config.tagline
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * Render the banner HTML and append to container.
   * @param {HTMLElement} container
   */
  render(container) {
    const el = document.createElement('section');
    el.className = 'banner';
    el.setAttribute('aria-label', 'Hero banner');
    el.innerHTML = this._template();
    container.appendChild(el);

    this._bindScrollCta(el);
  }

  _template() {
    const { name, tagline } = this.config;
    return `
      <div class="banner__bg" role="presentation"></div>
      <div class="banner__grain" role="presentation" aria-hidden="true"></div>
      <div class="banner__grid" role="presentation" aria-hidden="true"></div>
      <div class="banner__accent-line" role="presentation" aria-hidden="true"></div>
      <div class="banner__scanline" role="presentation" aria-hidden="true"></div>

      <div class="banner__orb banner__orb--1" aria-hidden="true"></div>
      <div class="banner__orb banner__orb--2" aria-hidden="true"></div>
      <div class="banner__orb banner__orb--3" aria-hidden="true"></div>

      <div class="banner__content">
        <h1 class="banner__brand">${name}</h1>
        <div class="banner__rule" aria-hidden="true"></div>
        <p  class="banner__tagline">${tagline}</p>
      </div>

      <button class="banner__scroll-cta" aria-label="Scroll to content">
        <span class="banner__scroll-label">Scroll</span>
        <span class="banner__scroll-arrow" aria-hidden="true"></span>
      </button>
    `;
  }

  _bindScrollCta(el) {
    const cta = el.querySelector('.banner__scroll-cta');
    if (!cta) return;

    cta.addEventListener('click', () => {
      const nav = document.querySelector('.site-nav');
      if (nav) {
        nav.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /**
   * Set a custom background image URL for the banner.
   * @param {string} imageUrl
   */
  setBackgroundImage(imageUrl) {
    const bg = document.querySelector('.banner__bg');
    if (bg && imageUrl) {
      bg.style.backgroundImage = `url('${imageUrl}')`;
    }
  }
}
