import '../../../d.ts'

export const menuItems = [
  {
    className: 'main',
    title: 'Главная',
    link: 'https://olyapolya.github.io/rslang/rslang/pages/sprint/',
  },
  {
    className: 'textbook',
    title: 'Учебник',
    link: '##',
  },
  {
    className: 'audio',
    title: 'Аудиовызов',
    link: '##',
  },
  {
    className: 'sprint',
    title: 'Спринт',
    link: '##',
  },
  {
    className: 'statistics',
    title: 'Статистика',
    link: '##',
  },
  {
    className: 'entry',
    title: 'Вход',
    link: '##',
  },
];

interface Item {
  className: string;
  title: string;
  link: string;
}

export function renderMenu(menuItems: Array<Item>) {
  const html = `
    <div class="menu">
      <div class="menu-burger">
          <span class="line line-first"></span>
          <span class="line line-second"></span>
          <span class="line line-third"></span>
        </div>
      <div class="menu-logo">
        <h1 class="menu-logo__name">RS-Lang</h1>
        <p class="menu-logo__subtitle">Learn English easily</p>
      </div>
      <nav class="menu-nav">
        <ul class="menu-list">
          ${menuItems
            .map(
              (item) =>
                `<li class="menu-item menu-item__${item.className}">
                <a href=${item.link} class="item-link">
                  <div class="item-image item-image__${item.className}"></div>
                  <span class="item-text item-text__${item.className}">${item.title}</span>
                </a>
              </li>`
            )
            .join('')}
        </ul>
      </nav>
    </div>`;
  const menu = document.createElement('header');
  menu.className = 'header';
  menu.innerHTML = html;
  return menu;
}
