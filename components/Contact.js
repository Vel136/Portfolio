/**
 * Contact.js — Contact section component
 * Renders contact method cards with platform icons.
 */

class Contact {
  /**
   * @param {Array} contacts - From SiteConfig.contact
   */
  constructor(contacts) {
    this.contacts = contacts;
  }

  render(container) {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'section section--glow';
    section.setAttribute('aria-labelledby', 'contact-title');

    section.innerHTML = `
      <div class="section__inner">
        <div class="section__header reveal">
          <span class="section__label">Get In Touch</span>
          <h2 class="section__title" id="contact-title">Contact</h2>
          <p class="section__subtitle">Ready to build something? Reach out through any of these channels.</p>
        </div>
        <div class="contact-grid reveal" id="contact-grid"></div>
        <p class="contact-footer">Built by VeDevelopment &mdash; Engineering systems. Shipping worlds.</p>
      </div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('#contact-grid');
    this.contacts.forEach((contact, i) => {
      const card = this._buildCard(contact, i);
      grid.appendChild(card);
    });
  }

  _buildCard(contact, index) {
    const isLink = !!contact.url;
    const el = document.createElement(isLink ? 'a' : 'div');

    el.className = `contact-card${!isLink ? ' contact-card--static' : ''}`;

    if (isLink) {
      el.href = contact.url;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
      el.setAttribute('aria-label', `${contact.platform}: ${contact.handle}`);
    }

    el.innerHTML = `
      <div class="contact-card__icon" aria-hidden="true">
        ${this._getIcon(contact.icon)}
      </div>
      <div class="contact-card__body">
        <span class="contact-card__platform">${contact.platform}</span>
        <span class="contact-card__handle">${contact.handle}</span>
      </div>
      ${contact.url ? `<span class="contact-card__cta">${contact.cta}</span>` : ''}
    `;

    return el;
  }

  _getIcon(iconName) {
    const map = {
      'discord':        Icons.discord,
      'discord-server': Icons.discord,
      'instagram':      Icons.instagram,
      'twitter':        Icons.twitter,
      'tiktok':         Icons.tiktok,
    };
    return map[iconName] || Icons.link;
  }
}
