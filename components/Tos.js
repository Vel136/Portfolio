class Tos {
  constructor(sections) {
    this.sections = sections;
  }

  render(container) {
    const section = document.createElement('section');
    section.id = 'tos';
    section.className = 'section';
    section.setAttribute('aria-labelledby', 'tos-title');

    section.innerHTML = `
      <div class="section__inner">
        <div class="section__header reveal">
          <span class="section__label">Commission</span>
          <h2 class="section__title" id="tos-title">Terms of Service</h2>
          <p class="section__subtitle">Read before commissioning. By starting a commission you agree to these terms.</p>
        </div>
        <div class="tos-grid" id="tos-grid"></div>
      </div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('#tos-grid');
    this.sections.forEach((clause, i) => {
      const card = this._buildCard(clause);
      card.classList.add('reveal');
      card.style.transitionDelay = `${i * 0.05}s`;
      grid.appendChild(card);
    });
  }

  _buildCard(clause) {
    const card = document.createElement('div');
    card.className = 'tos-card';

    const items = clause.items
      .map(item => `<li class="tos-card__item">${item}</li>`)
      .join('');

    card.innerHTML = `
      <div class="tos-card__header">
        <span class="tos-card__number">${clause.number}</span>
        <h3 class="tos-card__title">${clause.title}</h3>
      </div>
      <ul class="tos-card__list">${items}</ul>
    `;

    return card;
  }
}
