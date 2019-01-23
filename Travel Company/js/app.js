const navBtn = document.querySelector('#btn-nav_open')
const nav = document.querySelector('#navbar ul');

const openNav = () => {
   nav.classList.toggle('nav-open');
}

navBtn.addEventListener('click', openNav);