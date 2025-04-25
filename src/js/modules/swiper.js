import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

function createSwiper(selector, config) {
    const swiperElement = document.querySelector(selector);
    return swiperElement ? new Swiper(swiperElement, config) : null;
}

createSwiper('[data-swiper-resume-portfolio]', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '[data-swiper-resume-portfolio-next]',
        prevEl: '[data-swiper-resume-portfolio-prev]'
    },
    pagination: {
        el: '[data-swiper-resume-portfolio-fraction]',
        type: 'fraction'
    },
    loop: true
});

createSwiper('[data-swiper-education]', {
    modules: [Navigation],
    navigation: {
        nextEl: '[data-swiper-education-next]',
        prevEl: '[data-swiper-education-prev]'
    },
    loop: true
});

createSwiper('[data-swiper-reviews]', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '[data-swiper-reviews-next]',
        prevEl: '[data-swiper-reviews-prev]'
    },
    pagination: {
        el: '[data-swiper-reviews-fraction]',
        type: 'fraction'
    },
    loop: true
});

createSwiper('[data-swiper-letters]', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '[data-swiper-letters-next]',
        prevEl: '[data-swiper-letters-prev]'
    },
    pagination: {
        el: '[data-swiper-letters-fraction]',
        type: 'fraction'
    }
});