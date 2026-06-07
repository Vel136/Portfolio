class Sidebar {
  constructor(brand, navItems) {
    this.brand = brand;
    this.navItems = navItems;
    this._activeId = null;
    this._observer = null;
    this._links = [];
  }

  render(container) {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.setAttribute('aria-label', 'Site navigation');

    sidebar.innerHTML = `
      <div class="sidebar__brand">
        <span class="sidebar__name">${this.brand.name}</span>
        <span class="sidebar__tagline">${this.brand.tagline}</span>
      </div>
      <div class="sidebar__divider"></div>
      <nav class="sidebar__nav" aria-label="Sections">
        <span class="sidebar__nav-label">Sections</span>
      </nav>
    `;

    const nav = sidebar.querySelector('.sidebar__nav');

    this.navItems.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'sidebar__link';
      btn.textContent = item.label;
      btn.dataset.target = item.id;

      btn.addEventListener('click', () => {
        const target = document.getElementById(item.id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });

      nav.appendChild(btn);
      this._links.push(btn);
    });

    container.appendChild(sidebar);
    this._initActiveObserver();
  }

  _initActiveObserver() {
    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) this._setActive(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

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
    this._links.forEach(link => {
      link.classList.toggle('active', link.dataset.target === id);
    });
  }
}
