/**
 * Pricing.js — Three-tier pricing section component
 */

class Pricing {
  constructor(tiers) {
    this.tiers = tiers;
  }

  render(container) {
    const section = document.createElement('section');
    section.id = 'pricing';
    section.className = 'section';
    section.setAttribute('aria-labelledby', 'pricing-title');

    section.innerHTML = `
      <div class="section__inner">
        <div class="section__header reveal">
          <span class="section__label">Investment</span>
          <h2 class="section__title" id="pricing-title">Pricing</h2>
          <p class="section__subtitle">Transparent, scope-based pricing for every project size.</p>
        </div>
        <div class="pricing-grid" id="pricing-grid"></div>
      </div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('#pricing-grid');
    this.tiers.forEach((tier, i) => {
      const card = this._buildCard(tier, i);
      card.classList.add('reveal');
      card.style.transitionDelay = `${i * 0.12}s`;
      grid.appendChild(card);
    });
  }

  _buildCard(tier, index) {
    const card = document.createElement('div');
    card.className = `pricing-card${tier.featured ? ' pricing-card--featured' : ''}`;

    const deliverableItems = tier.deliverables
      .map(item => `
        <li class="pricing-card__item">
          <span class="pricing-card__item-icon" aria-hidden="true">${Icons.check}</span>
          <span>${item}</span>
        </li>
      `)
      .join('');

    card.innerHTML = `
      ${tier.featured ? '<span class="pricing-badge">Most Popular</span>' : ''}

      <div class="pricing-card__header">
        <span class="pricing-card__tier">${tier.tier}</span>
        <div class="pricing-card__label">${tier.label}</div>
        <div class="pricing-card__range">${tier.range}</div>
      </div>

      <p class="pricing-card__desc">${tier.description}</p>
      <div class="pricing-card__divider" role="separator"></div>

      <ul class="pricing-card__deliverables" aria-label="Deliverables">
        ${deliverableItems}
      </ul>

      <a href="#contact" class="pricing-card__cta" aria-label="Get started with ${tier.label}">
        Get Started
        ${Icons.arrowRight}
      </a>
    `;

    return card;
  }
}
