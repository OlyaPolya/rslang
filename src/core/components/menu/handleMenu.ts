export function toggleBurgerMenu(element: HTMLElement) {
  if (element.classList.contains('menu-burger__active')) {
    element.classList.remove('menu-burger__active');
  } else {
    element.classList.add('menu-burger__active');
  }
}

export function openMenuItems(element: HTMLElement) { 
  if (element.classList.contains('menu-nav__open')) {
    element.classList.remove('menu-nav__open');
  } else {
    element.classList.add('menu-nav__open');
  }
}

export function closeMenu(element: HTMLElement) {
  const parent = <HTMLElement>element.parentElement;
  if (parent.classList.contains('menu-nav__open')) {
      parent.classList.remove('menu-nav__open');
      const burgerMenu = <HTMLElement>document.querySelector('.menu-burger');
      burgerMenu.classList.remove('menu-burger__active');
  };
}