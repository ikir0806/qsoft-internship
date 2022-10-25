export default function () {
    const str = '.single-item';
    $(str).slick({
        dots: true,
        slidesToShow: 3,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
                }
            },
        ]
    });
}