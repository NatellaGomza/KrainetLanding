import { iconLeaf } from '../svg/overview/iconLeaf.js';
import { iconTub } from '../svg/overview/iconTub.js';
import { iconEat } from '../svg/overview/iconEat.js';
import { iconAlarm } from '../svg/overview/iconAlarm.js';

const items = [
  {
    content: 'Функциональное питание содержит только полезные питательные вещества.',
    image: (color) => iconLeaf(color),
    marginRight: '20px',
  },
  {
    content: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
    image: (color) => iconTub(color),
    marginRight: 0,
  },
  {
    content: 'Замените один-два приема обычной еды на наше функциональное питание.',
    image: (color) => iconEat(color),
    marginRight: 0,
  },
  {
    content:
      'Уже через месяц наслаждайтесь изменениями к лучшему <span class="break-line"></span> вашего питомца!',
    image: (color) => iconAlarm(color),
    marginRight: 0,
  },
];

export function renderOverview(color) {
  const overviewSection = document.getElementById('overview-content');

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'main-overview__item-wrapper';

    card.innerHTML = `
<div class="main-overview__item">
<div class="main-overview__number" style="margin-right: ${item.marginRight}">${index + 1}</div>
<div class="main-overview__wrapper">
      <div class="main-overview__image">
        ${item.image(color)}
      </div>
      <p class="main-overview__content-text">${item.content}</p>
      </div>
      </div>
    `;

    overviewSection.appendChild(card);
  });
}
