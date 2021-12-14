var slideIndex = 1;
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

showSlides(slideIndex);

function plusSlides(n) {
    console.log(slideIndex)
    showSlides(slideIndex += 1);
    console.log(slideIndex)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var testimonials = document.querySelectorAll('.testimonial-card')
    var dots = document.querySelectorAll('.dot')

    if (n > testimonials.length) {
        slideIndex = 1;}
    if (n < 1) {
        slideIndex = testimonials.length;
    }
    for (i=0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none"
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    testimonials[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
    console.log(slideIndex)
}

prev.addEventListener('click', () => {
    slideIndex = slideIndex - 1;
    showSlides(slideIndex)
})

next.addEventListener('click', () => {
    slideIndex = slideIndex + 1;
    showSlides(slideIndex)
})