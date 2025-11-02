import {initBurgerMenu} from './components/burgerMenu.js';
import {renderPrograms} from "./components/programs.js";

const primaryColor = 'black';

initBurgerMenu();
renderPrograms(primaryColor);

const header = document.querySelector('.header');
const headerLink = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        header.classList.add('scrolled');
        headerLink.forEach(el => el.classList.add('scrolled'));
    } else {
        header.classList.remove('scrolled');
        headerLink.forEach(el => el.classList.remove('scrolled'));
    }
});



