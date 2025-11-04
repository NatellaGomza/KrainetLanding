import {initBurgerMenu} from './components/burgerMenu.js';
import {renderPrograms} from "./components/programs.js";
import {renderOverview} from "./components/overview.js";
import {renderExample} from "./components/example.js";
import {renderMap} from "./components/address.js";
import {renderFooter} from "./components/footer.js";
import {logo} from './svg/logo.js';
import {logoIcon} from './svg/logoIcon.js';

const primaryColor = 'black';

initBurgerMenu();
renderPrograms(primaryColor);
renderOverview();
renderExample();
renderMap();
renderFooter();

const header = document.querySelector('.header');
const headerLink = document.querySelectorAll('.nav__link');
const headerLogo = document.getElementById('header-logo');

headerLogo.innerHTML = `<span style="margin-right: 15px">${logoIcon()}</span>
        <span style="margin-top: 5px">${logo()}</span>`

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        header.classList.add('scrolled');
        headerLink.forEach(el => el.classList.add('scrolled'));
    } else {
        header.classList.remove('scrolled');
        headerLink.forEach(el => el.classList.remove('scrolled'));
    }
});



