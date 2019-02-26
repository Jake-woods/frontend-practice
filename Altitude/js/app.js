const btnOpenNav = document.querySelector('.js-open-nav');
const btnCloseNav = document.querySelector('.js-close-nav');
const navBar = document.querySelector('.nav');


btnOpenNav.addEventListener('click', openNavBar);
btnCloseNav.addEventListener('click', closeNavBar);

function openNavBar() {
   navBar.classList.add('nav--is-active');
}

function closeNavBar() {
   navBar.classList.remove('nav--is-active');
}