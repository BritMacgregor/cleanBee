/*===================================*/
/*-----My Custom Java Slider---------*/
/*===================================*/
/*---inspired by: Yaphi Berhanu, from: sitepoint.com */

//creates var for the ul and li elements named slides (all the slides in the container)
var slides = document.querySelectorAll('#slides .slide');
//sets the counter for the first slide at 0 too keep track of the current slide
var currentSlide = 0;
//var that holds an interval that determines how many milliseconds it will take to move to the next slide
var slideInterval = setInterval(nextSlide,5000); //5 seconds

//Note: Also relies on the CSS opacity transition properties to automatically handle the fading effects
//fucntion named nextSlide that grabs the currentSlide number, and adds 1 to it.
function nextSlide() {
    goToSlide(currentSlide+1);
}

// fucntion named previous that grabs the currentSlide number, and minuses 1 from it.
function previousSlide() {
    goToSlide(currentSlide-1);
}

//fucntion named goToSlide with an argument of n, that
//1) grabs the currentSlide array number, and gives it the class name slide so it's not showing
//2) then add 1 to the current slide, and use the % operator to cycle back to zero if the end of the slides is reached.
//3) //then changes that slide’s class so that the slide is showing
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

//Var for control buttons
var next = document.getElementById('next');
var previous = document.getElementById('prev');

//when next is clicked....calls the nextSlide Function
next.onclick = function() {
    nextSlide();
};
//when prev is clicked... class the previousSlide function
previous.onclick = function() {
    previousSlide();
};
