import {logo} from '../svg/logo.js';
import {iconHTMLAcademy} from '../svg/footer/iconHTMLAcademy.js';
import {iconInst} from '../svg/footer/iconInst.js';
import {iconFacebook} from '../svg/footer/iconFB.js';
import {iconVk} from '../svg/footer/iconVk.js';

export function renderFooter() {
    const icons = [
        {
            link: 'https://vk.com/',
            icon: iconVk,
        },
        {
            link: 'https://www.instagram.com/',
            icon: iconInst,
        },
        {
            link: 'https://www.facebook.com/',
            icon: iconFacebook,
        },
    ];
    const footerSection = document.getElementById('footerWrapper');

    const iconsHTML = icons.map((el) => `<a href="${el.link}" target="_blank">${el.icon()}</a>`).join('');

    footerSection.innerHTML = `
    <div class="main-footer__logo">
      ${logo()}
    </div>
    <div class="main-footer__divider"></div>
    <div class="main-footer__icons">
      ${iconsHTML}
    </div>
    <div class="main-footer__divider"></div>
    <div class="main-footer__html-academy">
    <a href="https://htmlacademy.ru/" target="_blank">
      <span>HTML Academy</span>
      <span>${iconHTMLAcademy()}</span>
      </a>
    </div>
  `;
}
