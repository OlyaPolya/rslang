import './assets/styles/style.scss';
import { renderMenu, menuItems} from './core/components/menu/renderMenu';
import { toggleBurgerMenu, openMenuItems, closeMenu } from './core/components/menu/handleMenu';

document.body.append(renderMenu(menuItems));

const burgerMenu = <HTMLElement>document.querySelector('.menu-burger');
const mainMenuItems = <HTMLElement>document.querySelector('.menu-nav');
const meniList = <HTMLElement>document.querySelector('.menu-list');

burgerMenu.addEventListener('click', () => {
  openMenuItems(mainMenuItems);
  toggleBurgerMenu(burgerMenu)});

meniList.addEventListener('click', () => {
  closeMenu(meniList);
});  


