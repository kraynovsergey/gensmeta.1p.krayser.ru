import Accordion from "accordion-js";

const accordionEducation = document.querySelectorAll('[data-accordion-education]');
if (accordionEducation.length > 0) {
    accordionEducation.forEach(el => {
        new Accordion(el);
    });
}

const accordionFaq = document.querySelector('[data-accordion-faq]');
if (accordionFaq) {
    new Accordion(accordionFaq, {
        openOnInit: [0]
    });
}