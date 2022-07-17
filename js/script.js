$(document).ready(function(){
    $('.carousel__wrapper').slick({
      dots: true,
      speed: 800,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow.svg"></button>' ,
      nextArrow: '<button type="button" class="slick-next"><img src=icons/rightarrow.svg></button>'

    });
  });

const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
menu.classList.add('active');
});

close.addEventListener('click', () => {
menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i)=> {
lines[i].style.width = item.innerHTML;

});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}