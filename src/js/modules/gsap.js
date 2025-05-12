import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

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