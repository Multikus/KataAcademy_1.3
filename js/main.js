const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const headerBurgerBtn = document.querySelector('.header__burger-btn');
const mobileMenuBtnClose = document.querySelector('.mobile-menu__btn-close');


headerBurgerBtn.addEventListener('click', () => {
    overlay.classList.toggle('overlay--visually-toggle');
    mobileMenu.classList.toggle('mobile-menu--visually-toggle');
    mobileMenuBtnClose.classList.toggle('mobile-menu--visually-toggle');
});

mobileMenuBtnClose.addEventListener('click', () => {
    overlay.classList.toggle('overlay--visually-toggle');
    mobileMenu.classList.toggle('mobile-menu--visually-toggle');
    mobileMenuBtnClose.classList.toggle('mobile-menu--visually-toggle');
});