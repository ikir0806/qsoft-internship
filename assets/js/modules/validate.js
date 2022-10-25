import 'jquery-validation/dist/jquery.validate';

export default function () {
    const selector = document.querySelectorAll('#validate');
    selector.forEach(el => {
        $(el).validate();
    });
}