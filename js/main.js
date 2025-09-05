$(function(){
    let header=$("header");
    let nav=$("nav");
    let headerH=header.innerHeight();
    let scrollPos=$(window).scrollTop();

    $(window).on("scroll",function(){
        scrollPos=$(this).scrollTop();
        console.log(scrollPos);
    });

$('.carousel_item').slick({
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
	})

$(window).on("scroll",function(){
   scrollPos=$(this).scrollTop();

   if(scrollPos>headerH){
    nav.addClass("fixed");
   }
   else{
    nav.removeClass("fixed");
   }

 console.log(scrollPos);
});


$("[data-scroll]").on("click",function(event){
    event.preventDefault();
    let elementId=$(this).data("scroll");
    let element0ffset=$(elementId).offset().top;


    $("html,body").animate({
        scrollTop:element0ffset
        }, 700);
    });

});

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', function(event) {
  event.stopPropagation();
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  if (hamMenu.classList.contains('active') && !offScreenMenu.contains(event.target) && !hamMenu.contains(event.target)) {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
  }
});
