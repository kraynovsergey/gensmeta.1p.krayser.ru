const formTrigger = document.querySelectorAll('[data-form-trigger]');
if (formTrigger.length > 0) {
    formTrigger.forEach(el => {
        el.addEventListener('click', () => {
            const formTriggerClosest = el.closest('[data-form-trigger-closest]');
            const priceSelector = formTriggerClosest.querySelector('[data-price-bim]');
            const select = formTriggerClosest.querySelector('select[name="method"]');
            const modal = document.querySelector(el.dataset.src);
            const modalSelector = modal.querySelector('[data-price-bim]');
            const modalSelect = modal.querySelector('select[name="method"]'); 

            modalSelector.checked = priceSelector.checked;

            if (select.value) {
                modalSelect.value = select.value;
                modalSelect.nextSibling.querySelector('.current').textContent = select.value;
            }

            if (select.value || priceSelector.checked) {
                modalSelector.dispatchEvent(new Event('change'));
            }
        });
    });
}