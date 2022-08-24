interface Item {
  className: string;
  title: string;
  backgroundImage: string;
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
                  <div class="item-image item-image__${item.className}" style="background-image: url('${item.backgroundImage}')"></div>
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

export const menuItems = [
  {
    className: 'main',
    title: 'Главная',
    backgroundImage:
      'https://2.downloader.disk.yandex.ru/preview/2321aea0edd5f4adb405f8eacb9e458a9e83d4a9725e46bd9fa250692b51cc5e/inf/PTtCOurpmJWCRjNzepMpGaPjR3IqjI9zAnCUvuYFIUyxSynYQLg9M77iuAx4g4nt78GpzeG81gOvo5CzIC7kvw%3D%3D?uid=87604752&filename=computer_website_user_interface_page_internet_web_house_ui_home_icon_210809.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=87604752&tknv=v2&size=2560x1297',
    link: 'https://olyapolya.github.io/rslang/rslang/pages/sprint/',
  },
  {
    className: 'textbook',
    title: 'Учебник',
    backgroundImage:
      'https://3.downloader.disk.yandex.ru/preview/8c0f894da28e593ca8599456e0d7f7a6433453c5e2304f90e82d61504233cef3/inf/4rLj29BcMbxsZmQWgiFYUO-FY7cQgE-ADJFYjbbNDWVXpTR6MUec_gXs4ymIOcN1Xu7hGNObwX1lOkO-Mf4tew%3D%3D?uid=87604752&filename=reading_knowledge_study_learning_book_read_icon_226277.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=87604752&tknv=v2&size=1088x1096',
    link: '##',
  },
  {
    className: 'audio',
    title: 'Аудиовызов',
    backgroundImage:
      'https://4.downloader.disk.yandex.ru/preview/e3e7f2f57ad61daf3ec986268095e6231c91ae864664ea4deee1c86d1121d731/inf/sbVOP2nWQrvPvIANowRG4mTHKYmg8sGxuUUZizRjJFoHvtBO16Jvt5eSAium9eOZTq9quyuUpVrkLTDK7AHDTg%3D%3D?uid=87604752&filename=iconfinder-musicmelodysoundaudio36-4105545_113821.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=87604752&tknv=v2&size=1088x1096',
    link: '##',
  },
  {
    className: 'sprint',
    title: 'Спринт',
    backgroundImage:
      'https://4.downloader.disk.yandex.ru/preview/863ed1d449ca5d5c8c57d76079c3e2488af1efba9f4772da221c42c773c64e0f/inf/5sxGj9D3uvPBRGcip9A1bf97lqg1wDUQIdrI49DfMXoMx4hAFUoJ8roR_plXJHKYGB5iVZ9E24FzC8dgwWTxvg%3D%3D?uid=87604752&filename=429runningshoe_100343.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=87604752&tknv=v2&size=1088x1096',
    link: '##',
  },
  {
    className: 'statistics',
    title: 'Статистика',
    backgroundImage:
      'https://1.downloader.disk.yandex.ru/preview/29945d658ff7813c459732b70b4be40e64951b68081082926d5fc561164ec6f5/inf/F2gq-KnaxsEYQo1s9qceJu-FY7cQgE-ADJFYjbbNDWUzhEkW92OJ33isfNsdn4ryljW3UA2G0PM0En7ksU_POw%3D%3D?uid=87604752&filename=business_diagram_report_analytics_statistics_graph_statistic_icon_226217.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=87604752&tknv=v2&size=1088x1096',
    link: '##',
  },
  {
    className: 'entry',
    title: 'Вход',
    backgroundImage:
      'https://2.downloader.disk.yandex.ru/preview/0cb2e7633f712273df271d2d73bd26aeafb536fd954423033a1f5ff21810468f/inf/2EcPyKTn4DnZ6LRK8nzGDI2OYiw8spJUPcrD3fTAxfOzgxZYnbKeZyyZB510Poym4TZzXdINl3gtxK27SsIFrg%3D%3D?uid=87604752&filename=arrow_entrance_in_internet_log_login_security_icon_127060.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=87604752&tknv=v2&size=1200x1760',
    link: '##',
  },
];
