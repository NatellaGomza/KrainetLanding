import { slimCat } from '../svg/programs/slimCat.js';
import { proCat } from '../svg/programs/proCat.js';
import { iconArrow } from '../svg/iconArr.js';

const programs = [
  {
    title: 'Похудение',
    subtitle:
      'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
    image: (color) => slimCat(color),
    button: 'Каталог slim',
    imgWidth: '0.7',
  },
  {
    title: 'Набор массы',
    subtitle:
      'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
    image: (color) => proCat(color),
    button: 'Каталог pro',
    imgWidth: '1.34',
  },
];

export function renderPrograms(color) {
  const programSection = document.getElementById('programs');

  programs.map((item) => {
    const card = document.createElement('div');
    card.className = 'main-programs__item';

    card.innerHTML = `
    <div class="main-programs__image-wrapper">
        <div style="scale: ${item.imgWidth}">
            ${item.image(color)}
        </div>
    </div>
    <h1 class="main-programs__title">${item.title}</h1>
    <div class="main-programs__content">
        <p class="main-programs__subtitle">${item.subtitle}</p>
        <div class="main-programs__divider"></div>
        <div class="main-programs__button">
            <span>${item.button}</span>
            ${iconArrow(color)}
        </div>
    </div>
  `;

    programSection.appendChild(card);
  });
}
