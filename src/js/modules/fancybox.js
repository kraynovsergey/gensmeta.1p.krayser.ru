import { Fancybox } from "@fancyapps/ui";
import { lenis } from "./lenis.js";

Fancybox.bind("[data-fancybox]", {
    on: {
        reveal: (fancybox, slide) => {
            lenis.stop();
        },
        close: () => {
            lenis.start();
        }
    }
});