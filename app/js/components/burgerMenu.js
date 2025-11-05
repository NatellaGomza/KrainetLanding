export function initBurgerMenu() {
  const burger = document.querySelector('.nav__burger');
  const navList = document.querySelector('.nav__list');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
  });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navList.contains(e.target) || burger.contains(e.target);

        if (!isClickInsideMenu) {
            burger.classList.remove('active');
            navList.classList.remove('active');
        }
    });
}
