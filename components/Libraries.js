class Libraries {
  constructor(libraries) {
    this.libraries = libraries;
  }

  render(container) {
    const section = document.createElement('section');
    section.id = 'libraries';
    section.className = 'section';
    section.setAttribute('aria-labelledby', 'libraries-title');

    section.innerHTML = `
      <div class="section__inner">
        <div class="section__header reveal">
          <span class="section__label">Open Source</span>
          <h2 class="section__title" id="libraries-title">Libraries</h2>
          <p class="section__subtitle">Production-grade Luau modules built for Roblox.</p>
        </div>
        <div class="libraries-grid" id="libraries-grid"></div>
      </div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('#libraries-grid');
    this.libraries.forEach((lib, i) => {
      const card = this._buildCard(lib);
      card.classList.add('reveal');
      card.style.transitionDelay = `${i * 0.07}s`;
      grid.appendChild(card);
    });
  }

  _buildCard(lib) {
    const card = document.createElement('a');
    card.className = 'lib-card';
    card.href = lib.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', lib.name);

    const tags = (lib.tags || [])
      .map(t => `<span class="lib-card__tag">${t}</span>`)
      .join('');

    card.innerHTML = `
      <div class="lib-card__top">
        <div class="lib-card__name-row">
          <h3 class="lib-card__name">${lib.name}</h3>
          <span class="lib-card__arrow">${Icons.externalLink}</span>
        </div>
        <p class="lib-card__tagline">${lib.tagline}</p>
      </div>
      <p class="lib-card__description">${lib.description}</p>
      ${tags.length ? `<div class="lib-card__tags">${tags}</div>` : ''}
    `;

    return card;
  }
}
