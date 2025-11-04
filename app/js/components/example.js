const items = [
    {
        title: '5 кг',
        info: 'снижение веса'
    },
    {
        title: '60 дней',
        info: 'затрачено времени'
    },
];

function initializeSlider() {
    const slider = document.querySelector(".main-example__slider-input");
    const afterImg = document.querySelector(".main-example__image--after");
    const overlay = document.querySelector(".main-example__overlay");
    const imageWrapper = document.querySelector(".main-example__image-wrapper");

    if (!slider || !afterImg || !overlay || !imageWrapper) return;

    const min = Number(slider.min) || 0;
    const max = Number(slider.max) || 100;
    const THUMB_WIDTH = 34; // соответствие CSS

    function updateVisuals() {
        const value = Number(slider.value);
        const ratio = (value - min) / (max - min); // от 0 до 1

        const sliderRect = slider.getBoundingClientRect();
        const imgRect = imageWrapper.getBoundingClientRect();

        const usableWidth = Math.max(0, sliderRect.width - THUMB_WIDTH);
        const thumbCenterX = sliderRect.left + ratio * usableWidth + THUMB_WIDTH / 2;

        const relativeX = thumbCenterX - imgRect.left;
        const clampedX = Math.max(0, Math.min(relativeX, imgRect.width));

        overlay.style.left = `${clampedX}px`;

        const clipPercent = imgRect.width > 0
            ? (clampedX / imgRect.width) * 100
            : 50;

        afterImg.style.clipPath = `inset(0 ${100 - clipPercent}% 0 0)`;
    }

    slider.addEventListener("input", updateVisuals);
    window.addEventListener("resize", updateVisuals);

    const images = imageWrapper.querySelectorAll("img");
    let loaded = 0;
    images.forEach((img) => {
        if (img.complete) loaded++;
        else img.addEventListener("load", () => {
            loaded++;
            if (loaded === images.length) updateVisuals();
        });
    });

    if (loaded === images.length) updateVisuals();
}

function renderAchievementCards() {
    const exampleSection = document.querySelector(".main-example__achievement-group");

    if (!exampleSection) {
        console.error("Контейнер для карточек не найден.");
        return;
    }

    items.forEach((item) => {
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "main-example__achievement-card-wrapper";

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

export function renderExample() {
    initializeSlider();
    renderAchievementCards();
}

