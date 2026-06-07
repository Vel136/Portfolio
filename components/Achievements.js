/**
 * Achievements.js — Achievements section component
 */

class Achievements {
  /**
   * @param {Object} data - From SiteConfig.achievements
   */
  constructor(data) {
    this.data = data;
  }

  render(container) {
    const section = document.createElement('section');
    section.id = 'achievements';
    section.className = 'section section--glow';
    section.setAttribute('aria-labelledby', 'achievements-title');

    section.innerHTML = `
      <div class="section__inner">
        <div class="section__header reveal">
          <span class="section__label">Background</span>
          <h2 class="section__title" id="achievements-title">Achievements</h2>
        </div>
        <div class="achievements-layout">
          <div class="achievements-bio reveal" id="achievements-bio"></div>
          <div class="achievements-highlights reveal" id="achievements-highlights"></div>
        </div>
      </div>
    `;

    container.appendChild(section);

    this._renderBio(section.querySelector('#achievements-bio'));
    this._renderHighlights(section.querySelector('#achievements-highlights'));
  }

  _renderBio(container) {
    // Bio paragraphs
    this.data.bio.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      container.appendChild(p);
    });

    // Project links
    const linksTitle = document.createElement('h3');
    linksTitle.style.cssText = `
      font-family: var(--font-mono);
      font-size: var(--size-xs);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-blue);
      margin: var(--space-5) 0 var(--space-3);
    `;
    linksTitle.textContent = 'Featured Projects';
    container.appendChild(linksTitle);

    const projectLinks = document.createElement('div');
    projectLinks.className = 'achievements-projects';

    this.data.projects.forEach(project => {
      const a = document.createElement('a');
      a.href = project.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'achievements-project-link';
      a.innerHTML = `${this._getIcon(project.icon)}<span>${project.label}</span>${Icons.externalLink}`;
      projectLinks.appendChild(a);
    });

    container.appendChild(projectLinks);

    // Social links
    if (this.data.socialLinks && this.data.socialLinks.length > 0) {
      const socialLinks = document.createElement('div');
      socialLinks.className = 'achievements-projects';
      socialLinks.style.marginTop = 'var(--space-3)';

      this.data.socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'achievements-project-link';
        a.innerHTML = `${this._getIcon(link.icon)}<span>${link.label}</span>${Icons.externalLink}`;
        socialLinks.appendChild(a);
      });

      container.appendChild(socialLinks);
    }
  }

  _renderHighlights(container) {
    this.data.highlights.forEach(highlight => {
      const card = document.createElement('div');
      card.className = 'achievement-card';

      const links = (highlight.links || [])
        .map(link => `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="achievement-card__link">
            ${Icons.externalLink}
            <span>${link.label}</span>
          </a>
        `)
        .join('');

      card.innerHTML = `
        <span class="achievement-card__year">${highlight.year}</span>
        <h3 class="achievement-card__title">${highlight.title}</h3>
        <p class="achievement-card__detail">${highlight.detail}</p>
        ${links.length ? `<div class="achievement-card__links">${links}</div>` : ''}
      `;

      container.appendChild(card);
    });
  }

  _getIcon(type) {
    switch (type) {
      case 'youtube': return Icons.youtube;
      case 'twitter': return Icons.twitter;
      default: return Icons.link;
    }
  }
}
