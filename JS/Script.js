const menuBurger = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-nav ');
const xBtn = document.querySelector('.x-btn');

const toggleOpen = false;
const toggleClose = false;

const toggleNavigation = () => {
  if (toggleOpen === false) {
    menuContainer.style.visibility = 'visible';
  }
};

const closeNavigation = () => {
  if (toggleClose === false) {
    menuContainer.style.visibility = 'hidden';
  }
};

menuBurger.addEventListener('click', toggleNavigation);
xBtn.addEventListener('click', closeNavigation);
