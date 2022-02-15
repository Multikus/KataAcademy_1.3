const overlay = document.querySelector('.overlay');
const overlayBackCall = document.querySelector('.back-call-overlay');
const overlayFeedback = document.querySelector('.feedback-overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const headerBurgerBtn = document.querySelector('.header__burger-btn');
const mobileMenuBtnClose = document.querySelector('.mobile-menu__btn-close');
const repairLogoItem = document.querySelectorAll('.repair__logo-item');
const overflow = document.querySelector('.repair__logo-list');
const repairReadMoreBtn = document.querySelector('.repair__read-more');
const slider = document.querySelector('.repair__slider');
const sliderPrice = document.querySelector('.price__swiper-container');
const sliderTech = document.querySelector('.repair-tech__swiper-container');
const repairTechItem = document.querySelectorAll('.repair-tech__item--visible-hide');
const partnerLogoItem = document.querySelectorAll('.partner-logo__logo-item--tablet-hide');
const repairTechReadMoreBtn = document.querySelector('.repair-tech__read-more');
const headerPhoneButton = document.querySelector('.header__phone-button');
const backCallPopup = document.querySelector('.back-call');
const feedbackPopup = document.querySelector('.feedback');
const formOrderButton = document.querySelector('.form-order__button');
const closePopupBackCallBtn = document.querySelector('.back-call__close-popup');
const closePopupFeedbackBtn = document.querySelector('.feedback__close-popup');
const checkStatusButton = document.querySelector('.header__check-status-button');
const descriptionOrderButton = document.querySelector('.menu-desktop__form-order');
const checkStatusButtonDesktop = document.querySelector('.menu-desktop__check-status');
const getOfferButton = document.querySelector('.price__get-offer-btn');

let mySwiper;
let mySwiperPrice;
let mySwiperTech;

const openCloseMenu = function() {
    overlay.classList.toggle('overlay--visually-toggle');
    mobileMenu.classList.toggle('mobile-menu--visually-toggle');
    mobileMenuBtnClose.classList.toggle('mobile-menu--visually-toggle');
}

const openCloseBackCallPopup = function () {
    overlayBackCall.classList.toggle('back-call-overlay--visually-toggle');
    backCallPopup.classList.toggle('back-call--show');
}

const openCloseFeedbackPopup = function () {
    overlayFeedback.classList.toggle('feedback-overlay--visually-toggle');
    feedbackPopup.classList.toggle('feedback--show');
}

// const openCloseFeedbackPopupDesktop = function () {
//     overlayFeedback.classList.toggle('feedback-overlay--visually-toggle');
//     feedbackPopup.classList.toggle('feedback--show');
// }

headerBurgerBtn.addEventListener('click', openCloseMenu);
mobileMenuBtnClose.addEventListener('click', openCloseMenu);
overlay.addEventListener('click', openCloseMenu);

headerPhoneButton.addEventListener('click', openCloseBackCallPopup);
closePopupBackCallBtn.addEventListener('click', openCloseBackCallPopup);
overlayBackCall.addEventListener('click', openCloseBackCallPopup);

checkStatusButton.addEventListener('click', openCloseFeedbackPopup);
formOrderButton.addEventListener('click', openCloseFeedbackPopup);
closePopupFeedbackBtn.addEventListener('click', openCloseFeedbackPopup);
overlayFeedback.addEventListener('click', openCloseFeedbackPopup);
descriptionOrderButton.addEventListener('click', openCloseFeedbackPopup);
checkStatusButtonDesktop.addEventListener('click', openCloseFeedbackPopup);
getOfferButton.addEventListener('click', () => {
    openCloseFeedbackPopup();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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
const showHideCard = function(list, checkClass, checkVisibleClass, btn, btnClassShow) {
    for ( let i = 0; i <= list.length - 1; i++ ) {

        if( list[i].classList.contains(checkClass) &&
            list[i].classList.contains(checkVisibleClass) ) {
            list[i].classList.remove(checkVisibleClass)
        } else {
            list[i].classList.add(checkVisibleClass)
        }
    }

    if ( btn.classList.contains(btnClassShow) ) {
        btn.innerHTML = `
        <img style='transform: rotate(180deg)' class="read-more__arrow" src="./img/svg/arrow-down.svg" alt="Стрелка вниз. Открывает текст">
        Скрыть
        `;
        btn.classList.remove(btnClassShow);
    } else {
        btn.innerHTML = `
        <img class="read-more__arrow" src="./img/svg/arrow-down.svg" alt="Стрелка вниз. Открывает текст">
        Показать всё
        `;
        btn.classList.add(btnClassShow);
    }
}

repairTechReadMoreBtn.addEventListener('click', () => {
    showHideCard(repairTechItem, 'repair-tech__item--visible-hide', 'repair-tech__item--visible-true', repairTechReadMoreBtn, 'repair-tech__read-more--show-all');
});

repairReadMoreBtn.addEventListener('click', () => {
    showHideCard(partnerLogoItem, 'partner-logo__logo-item--tablet-hide', 'partner-logo__logo-item--show', repairReadMoreBtn, 'repair__read-more--show-all')
});