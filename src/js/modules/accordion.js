import Accordion from "accordion-js";

const accordionFaq = document.querySelector('[data-accordion-faq]');
if (accordionFaq) {
    new Accordion(accordionFaq, {
        openOnInit: [0]
    });
}