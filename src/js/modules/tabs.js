import tabs from "tabs";

const tabs_container = document.querySelectorAll('[data-tabs]');
if (tabs_container.length > 0) {
    tabs_container.forEach(item => {
        tabs(item);
    });
}