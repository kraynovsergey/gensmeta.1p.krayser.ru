import NiceSelect from "../../../node_modules/nice-select2/dist/js/nice-select2.js";

const select = document.querySelectorAll('[data-select]');
if (select.length > 0) {
    select.forEach(el => {
        const sel = NiceSelect.bind(el);
    });
}