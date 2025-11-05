export function initBurgerMenu() {
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
}
