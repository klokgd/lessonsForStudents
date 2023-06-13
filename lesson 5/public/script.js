var slideIndex = 1;
let socket = io();

showSlide(slideIndex);

socket.on('slide-next', () => {
    showSlide(slideIndex += 1);
    console.log('Emit click next slide')

})
socket.on('slide-prev', () => {
    showSlide(slideIndex -= 1);
    console.log('Emit click prev slide')
})

document.querySelector('.prev').addEventListener('click', function () {
    showSlide(slideIndex -= 1);
    socket.emit('slide-prev', () => {
        console.log('Click prev slide')
    })
    var slides = document.querySelectorAll('.slider img');
    slides.forEach(function (slide) {
        slide.style.transition = "transform 0.4s ease-in-out";
    });
});

document.querySelector('.next').addEventListener('click', function () {
    showSlide(slideIndex += 1);
    socket.emit('slide-next', () => {
        console.log('Click next slide')
    })
});

function showSlide(n) {
    var slides = document.querySelectorAll('.slider img');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(function (slide) {
        slide.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";
}