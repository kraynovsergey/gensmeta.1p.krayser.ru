const priceSelector = document.querySelectorAll('[data-price-selector]');
if (priceSelector.length > 0) {
    priceSelector.forEach(el => {
        el.addEventListener('change', () => {
            const priceClosest = el.closest('[data-price-closest]');
            const priceValue = priceClosest.querySelector('[data-price-value]');

            if (el.checked) priceValue.textContent = el.dataset.priceMax
                else priceValue.textContent = el.dataset.priceMin;
        });
    });
}