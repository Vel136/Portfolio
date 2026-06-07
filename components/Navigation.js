/**
 * Navigation.js — Sticky horizontal navigation component
 * Highlights the active section on scroll using IntersectionObserver.
 */

class Navigation {
  /**
   * @param {Array<{id: string, label: string}>} navItems
   */
  constructor(navItems) {
    this.navItems = navItems;
    this._activeId = null;
    this._observer = null;
  }

  /**
   * Render the nav and append to container.
   * @param {HTMLElement} container
   */
  render(container) {
    const nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Main navigation');

    const inner = document.createElement('div');
    inner.className = 'site-nav__inner';

    this.navItems.forEach(item => {
      const a = document.createElement('a');
      a.className = 'site-nav__link';
      a.href = `#${item.id}`;
      a.textContent = item.label;
      a.dataset.target = item.id;

      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(item.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });

      inner.appendChild(a);
    });

    nav.appendChild(inner);
    container.appendChild(nav);

    this._navEl = nav;
    this._innerEl = inner;

    this._initScrollEffects();
    this._initActiveObserver();
  }

  _initScrollEffects() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          this._navEl.classList.toggle('scrolled', scrolled);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  _initActiveObserver() {
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this._setActive(entry.target.id);
        }
      });
    }, options);

    // Observe after sections are rendered
    requestAnimationFrame(() => {
      this.navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) this._observer.observe(section);
      });
    });
  }

  _setActive(id) {
    if (this._activeId === id) return;
    this._activeId = id;

    this._innerEl.querySelectorAll('.site-nav__link').forEach(link => {
      link.classList.toggle('active', link.dataset.target === id);
    });
  }

  destroy() {
    if (this._observer) {
      this._observer.disconnect();
    }
  }
}
