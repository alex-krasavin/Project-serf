window.addEventListener("DOMContentLoaded",() => {
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
    
    $(".surf-slider").slick({
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg">',
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".surf-slider-map"
    });
    
    
    $(".surf-slider-map").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: ".surf-slider",
        arrows: false,
        focusOnSelect:true
    });
    
    $(".holder-slider").slick({
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg">',
        infinite:true,
        fade:true,
    });
    
    // Calculator sleep section
    const price = document.querySelectorAll("[data-price]"),
          btns = document.querySelectorAll(".buttons-calc button"),
          slides = $(".holder-slider.sleep"),
          nights = document.querySelectorAll("[data-nights]"),
          guests = document.querySelectorAll("[data-guests]")

          const nightsArr = [...nights]
          const guestsArr = [...guests]
          const priceArr = [...price]
    
    function getResult (slide = 0) {  
        priceArr[slide].innerText = Math.floor((+nightsArr[slide].innerText * +guestsArr[slide].innerText) * 17.5)
    }

    function calcPrice () {
        btns.forEach(item => {
            item.addEventListener("click", (e) => {
                const counter = e.currentTarget.closest(".holder-slider__info-item").querySelector("[data-counter]").innerText
                if(e.currentTarget.hasAttribute("data-minus")) {  
                    if(+counter > 0)  {
                        e.currentTarget.closest(".holder-slider__info-item").querySelector("[data-counter]").innerText--
                    };
                };
    
                if(e.currentTarget.hasAttribute("data-plus")) {
                    if(+counter < 9)  {
                        e.currentTarget.closest(".holder-slider__info-item").querySelector("[data-counter]").innerText++
                    };
                };
            getResult()
            });
        });
    }
    calcPrice(); 

    slides.on('afterChange', function(event, slick, currentSlide, nextSlide){
        btns.forEach(item => {
            item.addEventListener("click",()=> getResult (currentSlide) )
        })
    });
});
