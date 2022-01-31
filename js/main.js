const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const headerBurgerBtn = document.querySelector('.header__burger-btn');
const mobileMenuBtnClose = document.querySelector('.mobile-menu__btn-close');
const repairLogoItem = document.querySelectorAll('.repair__logo-item');
const overflow = document.querySelector('.repair__logo-list');
const repairReadMoreBtn = document.querySelector('.repair__read-more');
const slider = document.querySelector('.repair__slider');
let mySwiper;

const showAll = function(arr) {
    let heightAllElem = 0;
    let heightElement = 0;
    let widthElement = arr[0].offsetWidth;
    let blocWidth = overflow.offsetWidth;
    let elementInRow = Math.floor(blocWidth / widthElement);
    let needShowRow = Math.ceil(arr.length / elementInRow) - 2;

    for(let i = 0; i < arr.length; i++) {
        heightAllElem =  heightAllElem + (arr[i].offsetHeight + 16)
    }

    heightElement = Math.floor(heightAllElem / arr.length);

    return needShowRow * heightElement
}

const openCloseMenu = function() {
    overlay.classList.toggle('overlay--visually-toggle');
    mobileMenu.classList.toggle('mobile-menu--visually-toggle');
    mobileMenuBtnClose.classList.toggle('mobile-menu--visually-toggle');
}

headerBurgerBtn.addEventListener('click', openCloseMenu);
mobileMenuBtnClose.addEventListener('click', openCloseMenu);
overlay.addEventListener('click', openCloseMenu);

repairReadMoreBtn.addEventListener('click', () => {
    if(!overflow.classList.contains('repair__logo-list--overflow')) {
        overflow.classList.add('repair__logo-list--overflow');
        overflow.style.height = (overflow.offsetHeight + showAll(repairLogoItem)) + 'px';
        repairReadMoreBtn.innerHTML = `
            <img style='transform: rotate(180deg)' class="read-more__arrow" src="./img/svg/arrow-down.svg" alt="Стрелка вниз. Открывает текст">
            Скрыть
        `;

    } else {
        overflow.style.height = '190px';
        overflow.style.overflowY = 'hidden';
        overflow.classList.remove('repair__logo-list--overflow');
        repairReadMoreBtn.innerHTML = `
            <img class="read-more__arrow" src="./img/svg/arrow-down.svg" alt="Стрелка вниз. Открывает текст">
            Показать всё
        `;
    }
});

const startSlider = function() {
    if (window.innerWidth <= 370 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper( slider, {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            spaceBetween: 16,
            slidesPerView: 1.2,
            loop: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true
        });

        slider.dataset.mobile = 'true';
    }

    if ( window.innerWidth > 370 ) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }
    }
}

startSlider();

window.addEventListener('resize', () => {
    startSlider();
});