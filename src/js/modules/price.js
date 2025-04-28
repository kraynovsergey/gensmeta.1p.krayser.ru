const priceClosest = document.querySelectorAll('[data-price-closest]');

if (priceClosest.length > 0) {
    priceClosest.forEach(item => {
        let priceArray = [];
        const prices = item.querySelectorAll('[data-price]');
        const pricesSelector = item.querySelectorAll('[data-price-selector]');
        const priceValue = item.querySelector('[data-price-value]');
        const priceSelect = item.querySelector('[data-select]');
        const priceBim = item.querySelector('[data-price-bim]');

        if (prices.length > 0) {
            prices.forEach(el => {
                priceArray.push(+el.dataset.price);
            });
        }

        if (pricesSelector.length > 0) {
            pricesSelector.forEach(el => {
                priceArray.push(+el.dataset.priceSelector);
            });
        }

        if (priceValue) priceValue.textContent = Math.min(...priceArray).toLocaleString();

        if (priceSelect) {
            priceSelect.addEventListener('change', () => {
                priceValue.textContent = calcPrice(priceSelect, priceBim);
            });
        }
    
        if (priceBim) {
            priceBim.addEventListener('change', () => {
                priceValue.textContent = calcPrice(priceSelect, priceBim);
            });
        }
    });
}

function calcPrice(priceSelect, priceBim) {
    let price = +priceSelect.querySelector('option[value="'+priceSelect.value+'"]').dataset.price;
    let priceSelector = +priceSelect.querySelector('option[value="'+priceSelect.value+'"]').dataset.priceSelector;

    if (priceBim.checked) return priceSelector.toLocaleString();
        else return price.toLocaleString();
}


/*if (priceSelector.length > 0) {
    priceSelector.forEach(el => {
        el.addEventListener('change', () => {
            const priceClosest = el.closest('[data-price-closest]');
            const priceValue = priceClosest.querySelector('[data-price-value]');

            if (el.checked) priceValue.textContent = el.dataset.priceMax
                else priceValue.textContent = el.dataset.priceMin;
        });
    });
}*/