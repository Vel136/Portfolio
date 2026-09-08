/**
 * app.js: builds the page from SiteConfig and mounts it.
 */

function build(config) {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(renderSidebar(config.brand, config.navigation));

  const content = el('div', { class: 'content' });

  content.appendChild(renderHeader(config.brand));

  const main = el('main');
  main.appendChild(renderWorks(config.works));
  main.appendChild(renderCode(config.code));
  main.appendChild(renderAchievements(config.achievements));
  main.appendChild(renderSkills(config.skills));
  main.appendChild(renderPricing(config.pricing));
  main.appendChild(renderContact(config.contact));
  content.appendChild(main);

  content.appendChild(
    el('footer', {}, [el('p', { text: `${config.brand.name}. ${config.brand.role}.` })])
  );

  fragment.appendChild(content);
  return fragment;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').appendChild(build(SiteConfig));
});
