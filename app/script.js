const burger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.toggle('active');
        navList.classList.toggle('active');
    }
});

const programs = [
    {
        title: "Похудение",
        subtitle: "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.",
        image: "assets/cat_back.png",
        button: "Каталог slim"
    },
    {
        title: "Набор массы",
        subtitle: "Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!",
        image: "assets/cat_back2.png",
        button: "Каталог pro"
    }
];


const section = document.getElementById("programs");

programs.map((item) => {
    const card = document.createElement("div");
    card.className = "main-programs__item";

    card.innerHTML = `
    <img class="main-programs__item-image" src="${item.image}" alt="" />
    <h1 class="main-programs__item-title">${item.title}</h1>
    <p class="main-programs__item-content">${item.subtitle}</p>
    <div class="main-programs__item-button">${item.button}</div>
  `;

    section.appendChild(card);
});
