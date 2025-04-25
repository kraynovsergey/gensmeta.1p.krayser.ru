const data_policy = document.querySelectorAll('[data-policy]');
if (data_policy.length > 0) {
    data_policy.forEach(item => {
        validate_privacy_policy(item);

        item.addEventListener('change', () => {
            validate_privacy_policy(item);
        });
    })

    function validate_privacy_policy(item) {
        let btn_submit = item.closest('form').querySelector('button[type="submit"]');
        item.checked ? btn_submit.disabled = false : btn_submit.disabled = true;
    }
}