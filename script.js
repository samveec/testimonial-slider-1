const swiper = new Swiper('.chef-slider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 400,
    loop: true,
    grabCursor: true,
    centeredSlides: true,

    // responsive breakpoints:
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        1800: {
            slidesPerView: 7,
            spaceBetween: 30
        }
    },

    // navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
})