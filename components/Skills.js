/**
 * Skills.js — Skills section component
 * Renders configurable skill cards from SiteConfig.skills array.
 */

class Skills {
  /**
   * @param {Array<{title: string, description: string, notes?: string}>} skills
   */
  constructor(skills) {
    this.skills = skills;
  }

  render(container) {
    const section = document.createElement('section');
    section.id = 'skills';
    section.className = 'section section--glow';
    section.setAttribute('aria-labelledby', 'skills-title');

    section.innerHTML = `
      <div class="section__inner">
        <div class="section__header reveal">
          <span class="section__label">Expertise</span>
          <h2 class="section__title" id="skills-title">Skills</h2>
          <p class="section__subtitle">Technologies and disciplines that power every project.</p>
        </div>
        <div class="skills-grid" id="skills-grid"></div>
      </div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('#skills-grid');
    this.skills.forEach((skill, i) => {
      const card = this._buildCard(skill, i);
      card.classList.add('reveal');
      card.style.transitionDelay = `${i * 0.07}s`;
      grid.appendChild(card);
    });
  }

  _buildCard(skill, index) {
    const card = document.createElement('article');
    card.className = 'skill-card';
    card.setAttribute('aria-label', skill.title);

    // Index number
    const idx = document.createElement('span');
    idx.className = 'skill-card__index';
    idx.textContent = String(index + 1).padStart(2, '0');
    idx.setAttribute('aria-hidden', 'true');

    // Title
    const title = document.createElement('h3');
    title.className = 'skill-card__title';
    title.textContent = skill.title;

    // Description
    const desc = document.createElement('p');
    desc.className = 'skill-card__description';
    desc.textContent = skill.description;

    card.appendChild(idx);
    card.appendChild(title);
    card.appendChild(desc);

    // Notes — only rendered if defined
    if (skill.notes !== undefined && skill.notes !== null) {
      const notes = document.createElement('p');
      notes.className = 'skill-card__notes';
      notes.setAttribute('aria-label', `Note: ${skill.notes}`);
      notes.textContent = `// ${skill.notes}`;
      card.appendChild(notes);
    }

    return card;
  }
}
