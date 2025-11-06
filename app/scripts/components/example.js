const items = [
  {
    title: '5 кг',
    info: 'снижение веса',
  },
  {
    title: '60 дней',
    info: 'затрачено времени',
  },
];

export function renderAdaptiveInput() {
  const wrapper = document.getElementById('inputWrapper');
  if (!wrapper) return;

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    wrapper.innerHTML = `
    <div class="main-example__progress-toggle" data-state="before">
  <span class="main-example__toggle-label">Было</span>
  <div class="main-example__toggle-bar">
    <div class="main-example__toggle-fill"></div>
  </div>
  <span class="main-example__toggle-label">Стало</span>
</div>

  `;
    initializeMobileSwitch();
    resetImageState();
  } else {
    wrapper.innerHTML = `
    <span>Было</span>
    <input type="range" min="0" max="100" value="50"
           class="main-example__slider-input" id="slider" />
    <span>Стало</span>
  `;
    initializeSlider();
  }
}

function resetImageState(state = 'before') {
  const afterImg = document.querySelector('.main-example__image--after');
  const overlay = document.querySelector('.main-example__overlay');
  const imageWrapper = document.querySelector('.main-example__image-wrapper');

  if (!afterImg || !overlay || !imageWrapper) return;

  if (state === 'before') {
    overlay.style.left = '0%';
    afterImg.style.clipPath = 'inset(0 100% 0 0)';
  } else {
    overlay.style.left = '100%';
    afterImg.style.clipPath = 'inset(0 0% 0 0)';
  }
}

function initializeMobileSwitch() {
  const toggle = document.querySelector('.main-example__progress-toggle');
  const afterImg = document.querySelector('.main-example__image--after');
  const overlay = document.querySelector('.main-example__overlay');
  const imageWrapper = document.querySelector('.main-example__image-wrapper');

  if (!toggle || !afterImg || !overlay || !imageWrapper) return;

  let state = toggle.getAttribute('data-state') || 'before';

  function applyState() {
    if (state === 'before') {
      overlay.style.left = '0%';
      afterImg.style.clipPath = 'inset(0 100% 0 0)';
    } else {
      overlay.style.left = '100%';
      afterImg.style.clipPath = 'inset(0 0% 0 0)';
    }
  }

  const images = imageWrapper.querySelectorAll('img');
  let loaded = 0;
  images.forEach((img) => {
    if (img.complete) loaded++;
    else {
      img.addEventListener('load', () => {
        loaded++;
        if (loaded === images.length) applyState();
      });
    }
  });
  if (loaded === images.length) applyState();
  toggle.addEventListener('click', () => {
    state = state === 'before' ? 'after' : 'before';
    toggle.setAttribute('data-state', state);
    applyState();
  });
}

function initializeSlider() {
  const slider = document.querySelector('.main-example__slider-input');
  const afterImg = document.querySelector('.main-example__image--after');
  const overlay = document.querySelector('.main-example__overlay');
  const imageWrapper = document.querySelector('.main-example__image-wrapper');

  if (!slider || !afterImg || !overlay || !imageWrapper) return;

  const min = Number(slider.min) || 0;
  const max = Number(slider.max) || 100;

  function updateVisuals() {
    const value = Number(slider.value);
    const ratio = (value - min) / (max - min);

    const imgRect = imageWrapper.getBoundingClientRect();

    const clampedX = ratio * imgRect.width;

    overlay.style.left = `${clampedX}px`;

    const clipPercent = (clampedX / imgRect.width) * 100;
    afterImg.style.clipPath = `inset(0 ${100 - clipPercent}% 0 0)`;
  }

  slider.addEventListener('input', updateVisuals);

  const images = imageWrapper.querySelectorAll('img');
  let loaded = 0;
  images.forEach((img) => {
    if (img.complete) loaded++;
    else
      img.addEventListener('load', () => {
        loaded++;
        if (loaded === images.length) updateVisuals();
      });
  });

  if (loaded === images.length) updateVisuals();
}

export function renderAchievementCards() {
  const exampleSection = document.querySelector('.main-example__achievement-group');

  if (!exampleSection) {
    return;
  }

  items.forEach((item) => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'main-example__achievement-card-wrapper';

    cardWrapper.innerHTML = `
            <div class="main-example__achievement-card-border"></div>
            <div class="main-example__achievement-card">
                <p class="main-example__achievement-card-title">${item.title}</p>
                <p class="main-example__achievement-card-info">${item.info}</p>
            </div>
        `;

    exampleSection.appendChild(cardWrapper);
  });
}
