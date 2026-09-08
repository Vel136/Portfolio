/**
 * sections.js: one function per section. Each returns a <section> element.
 * Structure only; all presentation lives in style.css.
 */

// ── Sidebar ───────────────────────────────────────────────────────────────
// Brand and navigation. Fixed alongside the content on wide screens; falls
// back to a normal block above the content on narrow ones.
function renderSidebar(brand, navigation) {
  return el('nav', { class: 'sidebar', 'aria-label': 'Sections' }, [
    el('p', { class: 'sidebar__name' }, [el('a', { href: '#', text: brand.name })]),
    el('p', { class: 'sidebar__role', text: brand.role }),
    el('ul', {}, navigation.map(item =>
      el('li', {}, [el('a', { href: `#${item.id}`, 'data-nav-target': item.id, text: item.label })])
    )),
  ]);
}

// ── Header ────────────────────────────────────────────────────────────────
// The sidebar carries the name and role on wide screens, so the header holds
// only the intro. The h1 stays here for document structure and is shown again
// on narrow screens, where the sidebar collapses to a nav strip.
function renderHeader(brand) {
  return el('header', {}, [
    el('h1', { text: brand.name }),
    el('p', { class: 'role', text: brand.role }),
    el('p', { class: 'intro', text: brand.intro }),
  ]);
}

// ── Past Work ─────────────────────────────────────────────────────────────
// `description` is optional: entries without one render as a compact
// title + meta + link line, so a long list doesn't read as a wall of text.
function renderWorks(works) {
  const list = el('ul', { class: 'entries entries--columns' }, works.map(work =>
    el('li', { class: work.description ? null : 'entries__compact' }, [
      el('h3', {}, [
        work.url ? extLink(work.url, work.title) : document.createTextNode(work.title),
      ]),
      el('p', { class: 'meta', text: work.meta }),
      work.description ? el('p', { text: work.description }) : null,
      work.url ? el('p', { class: 'link' }, [extLink(work.url, work.linkLabel)]) : null,
    ])
  ));

  const node = section('works', 'Past Work');
  node.appendChild(list);
  return node;
}

// ── Code ──────────────────────────────────────────────────────────────────
function renderCode(code) {
  const node = section('code', 'Code');
  node.appendChild(el('p', { text: code.description }));
  node.appendChild(el('p', { class: 'link' }, [extLink(code.url, code.linkLabel)]));
  return node;
}

// ── Achievements ──────────────────────────────────────────────────────────
function renderAchievements(achievements) {
  const list = el('ul', { class: 'entries' }, achievements.map(item =>
    el('li', {}, [
      el('h3', { text: item.title }),
      el('p', { class: 'meta', text: item.year }),
      el('p', { text: item.detail }),
      item.url ? el('p', { class: 'link' }, [extLink(item.url, item.linkLabel)]) : null,
    ])
  ));

  const node = section('achievements', 'Achievements');
  node.appendChild(list);
  return node;
}

// ── Skills ────────────────────────────────────────────────────────────────
function renderSkills(skills) {
  const list = el('dl', { class: 'skills' });

  skills.forEach(skill => {
    list.appendChild(el('dt', { text: skill.title }));
    list.appendChild(el('dd', { text: skill.description }));
  });

  const node = section('skills', 'Skills');
  node.appendChild(list);
  return node;
}

// ── Pricing ───────────────────────────────────────────────────────────────
function renderPricing(pricing) {
  const table = el('table', {}, [
    el('thead', {}, [
      el('tr', {}, [
        el('th', { scope: 'col', text: 'Tier'  }),
        el('th', { scope: 'col', text: 'Price' }),
        el('th', { scope: 'col', text: 'Scope' }),
      ]),
    ]),
    el('tbody', {}, pricing.rows.map(row =>
      el('tr', {}, [
        el('th', { scope: 'row', text: row.tier }),
        el('td', { class: 'price', text: row.price }),
        el('td', { text: row.scope }),
      ])
    )),
  ]);

  const node = section('pricing', 'Pricing');
  node.appendChild(table);
  node.appendChild(el('p', { class: 'note', text: pricing.note }));
  return node;
}

// ── Contact ───────────────────────────────────────────────────────────────
function renderContact(contacts) {
  const list = el('dl', { class: 'contact' });

  contacts.forEach(contact => {
    list.appendChild(el('dt', { text: contact.platform }));
    list.appendChild(el('dd', {}, [extLink(contact.url, contact.handle)]));
  });

  const node = section('contact', 'Contact');
  node.appendChild(list);
  return node;
}
