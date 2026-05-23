const navbarContainer = document.getElementById('navbar-container');
const navChild = document.getElementById('nav-child');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');
const navMobile = document.getElementById('nav-mobile');
const body = document.body;


navOpen.addEventListener('click', () => {
    navMobile.classList.remove('translate-x-[110%]');
    navMobile.classList.add('translate-x-0');
    navOpen.classList.add('opacity-0');
    body.classList.add('overflow-hidden');
});

navClose.addEventListener('click', () => {
    navMobile.classList.remove('translate-x-0');
    navMobile.classList.add('translate-x-[110%]');
    body.classList.remove('overflow-hidden');
    navOpen.classList.remove('opacity-0');
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        navChild.classList.add('animate-slide-down');
    } else if (window.scrollY == 0) {
        navChild.classList.remove('animate-slide-down');
        navChild.classList.add('top-0');
    }
});