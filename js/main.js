const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const headerBurgerBtn = document.querySelector('.header__burger-btn');
const mobileMenuBtnClose = document.querySelector('.mobile-menu__btn-close');
const repairLogoItem = document.querySelectorAll('.repair__logo-item');
const overflow = document.querySelector('.repair__logo-list');
const repairReadMoreBtn = document.querySelector('.repair__read-more');
const slider = document.querySelector('.repair__slider');
const sliderPrice = document.querySelector('.price__swiper-container');
const sliderTech = document.querySelector('.repair-tech__swiper-container');
const repairTechItem = document.querySelectorAll('.hide-js');
const repairTechReadMoreBtn = document.querySelector('.repair-tech__read-more');
let mySwiper;
let mySwiperPrice;
let mySwiperTech;

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

// swiper
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
        sliderPrice.dataset.mobile = 'false';
        if ( slider.classList.contains('swiper-initialized') ) {
            mySwiper.destroy();
        }
    }
}
startSlider();

const startSliderPrice = function() {
    if ( window.innerWidth <= 370 && sliderPrice.dataset.mobile == 'false' ) {
        mySwiperPrice = new Swiper( sliderPrice, {
            pagination: {
                el: '.price__slider-pagination',
                type: 'bullets',
                clickable: true
            },
            spaceBetween: 16,
            slidesPerView: 1.2,
            loop: true,
            // observer: true,
            observeParents: true,
            observeSlideChildren: true
        });

        sliderPrice.dataset.mobile = 'true';
    }

    if ( window.innerWidth > 370 ) {
        sliderPrice.dataset.mobile = 'false';
        if ( sliderPrice.classList.contains('swiper-initialized') ) {
            mySwiperPrice.destroy();
        }
    }
}
startSliderPrice();

const startSliderTech = function() {
    if ( window.innerWidth <= 370 && sliderTech.dataset.mobile == 'false' ) {
        mySwiperTech = new Swiper( sliderTech, {
            pagination: {
                el: '.repair-tech__slider-pagination',
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

        sliderTech.dataset.mobile = 'true';
    }

    if ( window.innerWidth > 370 ) {
        sliderTech.dataset.mobile = 'false';
        if ( sliderTech.classList.contains('swiper-initialized') ) {
            mySwiperTech.destroy();
        }
    }
}
startSliderTech();

window.addEventListener('resize', () => {
    startSlider();
    startSliderPrice();
    startSliderTech();
});

//скрываем элементы
const showHideRepairTechCard = function(list, setDataName) {

    for ( let i = 0; i <= list.length; i++ ) {
        if( list[i].dataset.setDataName == 'false' && 
            list[i].classList.contains('hide-js') ) {
            list[i].style.display = 'flex';
            list[i].dataset.setDataName = 'true';
        } else {
            list[i].style.display = 'none';
            list[i].dataset.setDataName = 'false';
        }
    }
}

repairTechReadMoreBtn.addEventListener('click', () => {
    showHideRepairTechCard(repairTechItem, 'visible');
});