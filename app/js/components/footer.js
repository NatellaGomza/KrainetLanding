import { logo } from '../svg/logo.js';
import { iconHTMLAcademy } from '../svg/footer/iconHTMLAcademy.js';
import { iconInst } from '../svg/footer/iconInst.js';
import { iconFacebook } from '../svg/footer/iconFB.js';
import { iconVk } from '../svg/footer/iconVk.js';
export function renderFooter() {
  const icons = [iconVk, iconInst, iconFacebook];
  const footerSection = document.getElementById('footer');

  const iconsHTML = icons.map((el) => `<span>${el()}</span>`).join('');

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
      <span>HTML Academy</span>
      <span>${iconHTMLAcademy()}</span>
    </div>
  `;
}
