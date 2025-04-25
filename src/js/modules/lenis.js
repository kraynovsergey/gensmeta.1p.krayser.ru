import Lenis from 'lenis';

export const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const btn_scroll = document.querySelectorAll('[data-scroll]');
if (btn_scroll.length > 0) {
    btn_scroll.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            lenis.scrollTo(item.getAttribute('href'), {
                offset: document.querySelector('[data-header]').offsetHeight * -1
            })
        });
    });
}