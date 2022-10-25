export default function () {
    const selector = document.querySelectorAll('.js-example-basic-single');
    selector.forEach(el => {
        $(el).select2({
            minimumResultsForSearch: Infinity,
        });
    });
}