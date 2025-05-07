import Lenis from 'lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.lagSmoothing(0);

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

const folderOperations = document.querySelector('[data-folder-operations]');
if (folderOperations) {
    gsap.to(folderOperations, {
        y: 0,
        duration: 1,
        delay: 1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: folderOperations,
            start: 'top 100%',
            end: 'top 20%',
            toggleActions: 'play reverse play reverse'
        }
    });
}

const lines = document.querySelectorAll('[data-lines]');
if (lines.length > 0) {
    lines.forEach(item => {
        gsap.to(item.querySelector('path:first-child'), {
            x: 0,
            duration: 1,
            delay: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                end: 'top 20%',
                toggleActions: 'play reverse play reverse'
            }
        });

        gsap.to(item.querySelector('path:last-child'), {
            x: 0,
            duration: 1,
            delay: 2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                end: 'top 20%',
                toggleActions: 'play reverse play reverse'
            }
        });
    });
}