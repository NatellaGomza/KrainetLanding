// 1. Данные для карточек (вынесены для чистоты)
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
    const slider = document.querySelector("#slider");
    const afterImg = document.querySelector(".after-img");
    const overlay = document.querySelector("#overlay");
    const imageWrapper = document.querySelector(".image-wrapper");
    if (!slider || !afterImg || !overlay || !imageWrapper) return;

    const min = Number(slider.min) || 0;
    const max = Number(slider.max) || 100;

    // Точная ширина thumb, соответствующая CSS (width + визуальный box-shadow не влияет)
    const THUMB_WIDTH = 34; // если меняешь CSS thumb.width — поменяй тут

    function updateVisuals() {
        const value = Number(slider.value);
        const ratio = (value - min) / (max - min); // 0..1

        const sliderRect = slider.getBoundingClientRect();
        const imgRect = imageWrapper.getBoundingClientRect();

        // usable ширина, по которой действительно движется центр thumb
        const usableWidth = Math.max(0, sliderRect.width - THUMB_WIDTH);

        // центр thumb в координатах окна
        const thumbCenterX = sliderRect.left + ratio * usableWidth + THUMB_WIDTH / 2;

        // центр относительно imageWrapper
        let relativeX = thumbCenterX - imgRect.left;
        const clampedX = Math.max(0, Math.min(relativeX, imgRect.width));

        // ставим overlay и clip-path
        overlay.style.left = `${clampedX}px`;
        afterImg.style.clipPath = `inset(0 ${100 - (clampedX / imgRect.width) * 100}% 0 0)`;
    }

    slider.addEventListener("input", updateVisuals);
    window.addEventListener("resize", updateVisuals);
    updateVisuals();
}



/**
 * Рендерит карточки достижений в указанный контейнер.
 */
function renderAchievementCards() {
    const exampleSection = document.querySelector(".main-example__achievement-group");

    if (!exampleSection) {
        console.error("Контейнер для карточек не найден.");
        return;
    }

    // Очищаем контейнер перед рендерингом (если нужно предотвратить дублирование при повторном вызове)
    // exampleSection.innerHTML = '';

    items.forEach((item) => {
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "main-example__achievement-card-wrapper";

        // Используем темплейт-литералы для чистоты
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


/**
 * Основная функция инициализации всего раздела примера.
 * Это ваша новая функция renderExample, которая вызывает обе части.
 */
export function renderExample() {
    initializeSlider();
    renderAchievementCards();
}

// Пример использования (если вы не используете модули или хотите запустить сразу)
// document.addEventListener('DOMContentLoaded', renderExample);
