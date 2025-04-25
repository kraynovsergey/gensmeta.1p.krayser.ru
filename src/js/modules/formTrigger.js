const formTrigger = document.querySelectorAll('[data-form-trigger]');
if (formTrigger.length > 0) {
    formTrigger.forEach(el => {
        el.addEventListener('click', () => {
            const formTriggerClosest = el.closest('[data-form-trigger-closest]');
            const priceSelector = formTriggerClosest.querySelector('[data-price-selector]');
            const select = formTriggerClosest.querySelector('select[name="method"]');
            const modal = document.querySelector(el.dataset.src);
            const modalSelector = modal.querySelector('[data-price-selector]');
            const modalSelect = modal.querySelector('select[name="method"]');

            console.log(modal);

            modalSelector.checked = priceSelector.checked;
            modalSelector.dispatchEvent(new Event('change'));

            if (select.value) {
                modalSelect.value = select.value;
                modalSelect.nextSibling.querySelector('.current').textContent = select.value;
            }
        });
    });
}