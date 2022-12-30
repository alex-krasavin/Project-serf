$(".header__slider").slick({
    infinite:true,
    fade:true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg">',
    asNavFor: ".slider-dots"
});

$(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor:".header__slider"
});