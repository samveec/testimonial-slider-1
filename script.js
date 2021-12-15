var slideIndex = 1;
var testimonials = document.querySelectorAll('.testimonial-card')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var myTimeout 

showSlides(slideIndex);
timer();

function plusSlides(n) {
    console.log(slideIndex)
    showSlides(slideIndex += 1);
    console.log(slideIndex)
}

function currentSlide(n) {
    clearTimeout(myTimeout);
    showSlides(slideIndex = n);
    timer();
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
} 

function timer() {
    myTimeout = setInterval(() => {
        if (slideIndex < testimonials.length) {
            showSlides(slideIndex++)
        } else {
            slideIndex = 1;
            showSlides(slideIndex)
        }
    }, 3000)
}


prev.addEventListener('click', () => {
    clearTimeout(myTimeout);
    slideIndex = slideIndex - 1;
    showSlides(slideIndex);
    timer()
})

next.addEventListener('click', () => {
    clearTimeout(myTimeout);
    slideIndex = slideIndex + 1;
    showSlides(slideIndex);
    timer()
})