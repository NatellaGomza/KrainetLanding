import {logo} from '../svg/logo.js';
export function renderFooter() {
    const footerSection = document.getElementById("footer");

   footerSection.innerHTML = ` <div class="main-footer__logo">
 ${logo()}
        </div>
        <div class="main-footer__icons"></div>
        <div class="main-footer__html-academy">
            <span>HTML Academy</span>

        </div>`
}

