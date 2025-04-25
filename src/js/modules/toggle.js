document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-toggle]');
    if (target) {
        e.preventDefault();
        target.classList.toggle('active');
    }
});

const toggleTargetElements = document.querySelectorAll('[data-toggle-target]');
if (toggleTargetElements.length > 0) {
    toggleTargetElements.forEach(item => {
        const target = document.querySelector(item.dataset.toggleTarget);

        if (target) {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                target.classList.toggle('active');
            });

            if (item.hasAttribute('data-contains')) {
                const contains = document.querySelector(item.dataset.contains);

                document.addEventListener('click', (e) => {
                    if (!item.contains(e.target) && (contains && !contains.contains(e.target))) {
                        target.classList.remove('active');
                    }
                });
            }
        }
    });
}