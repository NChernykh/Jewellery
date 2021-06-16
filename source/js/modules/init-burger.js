const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const navToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const filter = document.querySelector('.filter');
const filterToggle = document.querySelector('.filter__toggle');

const initBurger = () => {

  if (mainNav) {
    mainNav.classList.remove('main-nav--opened');
    header.classList.remove('header--nojs', 'header--opened');

    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav--opened');
      header.classList.toggle('header--opened');
      footer.classList.toggle('footer--js');
      main.classList.toggle('main--js');

    });
  }

  if (filter) {
    filter.classList.remove('filter--nojs', 'filter--opened');

    filterToggle.addEventListener('click', function () {
      filter.classList.toggle('filter--opened');
    });

  }
};

export {initBurger};
