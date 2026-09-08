/**
 * dom.js: minimal element builder.
 * All text goes through textContent, so config content is never parsed as HTML.
 */

/**
 * @param {string} tag
 * @param {Object} [attrs] - Attributes. `class` and `text` are special-cased.
 * @param {Array<Node|string>} [children]
 * @returns {HTMLElement}
 */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);

  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;

    if (key === 'class') {
      node.className = value;
    } else if (key === 'text') {
      node.textContent = value;
    } else {
      node.setAttribute(key, value === true ? '' : value);
    }
  }

  for (const child of children) {
    if (child == null) continue;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }

  return node;
}

/**
 * External link that opens in a new tab with a safe rel.
 * @param {string} href
 * @param {string} label
 * @param {Object} [attrs]
 */
function extLink(href, label, attrs = {}) {
  return el('a', {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    text: label,
    ...attrs,
  });
}

/** A titled <section> with a heading, ready for content. */
function section(id, title) {
  const headingId = `${id}-title`;
  const node = el('section', { id, 'aria-labelledby': headingId }, [
    el('h2', { id: headingId, text: title }),
  ]);
  return node;
}
