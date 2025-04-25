const page = document.querySelector('[data-page]');
if (page) {
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(() => {
            page.classList.add('page_loaded');
        }, 1000);
    });
}