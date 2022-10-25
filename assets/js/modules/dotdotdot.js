import Dotdotdot from "dotdotdot-js";

export default function () {
    const selector = ".dotdotdot";
    let wrapper = document.querySelectorAll(selector);
    let options = {
        height: null,
        fallbackToLetter: true,
        watch: true,
    };
    wrapper.forEach(el => {
        options.height = +el.dataset.height;
        new Dotdotdot(el, options);
    });

}