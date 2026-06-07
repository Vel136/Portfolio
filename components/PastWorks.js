/**
 * PastWorks.js — Past Works grid section component
 * Renders work cards from config. Supports image, YouTube, and Twitter/X.
 */

class PastWorks {
  /**
   * @param {Array} works - From SiteConfig.works
   */
  constructor(works) {
    this.works = works;
  }

  render(container) {
    const section = document.createElement('section');
    section.id = 'works';
    section.className = 'section section--glow';
    section.setAttribute('aria-labelledby', 'works-title');

    section.innerHTML = `
      <div class="section__inner">
        <div class="section__header reveal">
          <span class="section__label">Portfolio</span>
          <h2 class="section__title" id="works-title">Past Works</h2>
          <p class="section__subtitle">Projects shipped, prototypes built, and systems engineered.</p>
        </div>
        <div class="works-grid" id="works-grid"></div>
      </div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('#works-grid');

    if (!this.works || this.works.length === 0) {
      grid.innerHTML = `<p class="works-empty">No works configured yet.</p>`;
      return;
    }

    this.works.forEach((work, i) => {
      const card = this._buildCard(work);
      card.style.animationDelay = `${i * 0.1}s`;
      card.classList.add('reveal');
      grid.appendChild(card);
    });
  }

  _buildCard(work) {
    const card = document.createElement('article');
    card.className = 'work-card';
    card.setAttribute('aria-label', work.title);

    const media = this._buildMedia(work);
    const overlay = this._buildOverlay(work);

    card.appendChild(media);
    card.appendChild(overlay);

    return card;
  }

  _buildMedia(work) {
    const wrapper = document.createElement('div');
    wrapper.className = 'work-card__media';

    if (work.type === 'youtube') {
      const iframe = document.createElement('iframe');
      iframe.src = `${work.src}?rel=0&modestbranding=1&controls=0&showinfo=0`;
      iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.title = work.title;
      wrapper.appendChild(iframe);
    } else if (work.type === 'image' && work.src) {
      const img = document.createElement('img');
      img.src = work.src;
      img.alt = work.title;
      img.loading = 'lazy';
      wrapper.appendChild(img);
    } else if (work.type === 'twitter') {
      wrapper.innerHTML = `
        <div class="work-card__twitter-placeholder">
          ${Icons.twitter}
          <span>View on X / Twitter</span>
        </div>
      `;
      // Make the whole card clickable for twitter links
    }

    return wrapper;
  }

  _buildOverlay(work) {
    const overlay = document.createElement('div');
    overlay.className = 'work-card__overlay';

    const tags = (work.tags || [])
      .map(t => `<span class="work-card__tag">${t}</span>`)
      .join('');

    const metaItems = [];
    if (work.price) {
      metaItems.push(`
        <span class="work-card__meta-item">
          ${Icons.dollar}
          <span>${work.price}</span>
        </span>
      `);
    }
    if (work.estimatedTime) {
      metaItems.push(`
        <span class="work-card__meta-item">
          ${Icons.clock}
          <span>${work.estimatedTime}</span>
        </span>
      `);
    }

    overlay.innerHTML = `
      ${tags.length ? `<div class="work-card__tags">${tags}</div>` : ''}
      <h3 class="work-card__title">${work.title}</h3>
      <p class="work-card__description">${work.description}</p>
      ${metaItems.length ? `<div class="work-card__meta">${metaItems.join('')}</div>` : ''}
    `;

    // If it's a twitter card, clicking opens the link
    if (work.type === 'twitter' && work.src) {
      overlay.style.pointerEvents = 'auto';
      overlay.closest?.('article')?.addEventListener('click', () => {
        window.open(work.src, '_blank', 'noopener,noreferrer');
      });
    }

    return overlay;
  }
}
