function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

$(document).ready(function () {
   svg4everybody({});
});

// for webP


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};



// burger menu

$(function(){
   $('.burger').on('click', function(){
      $('.burger').toggleClass('active'),
      $('.nav').toggleClass('active');
   });

   $('.nav__link').on('click', function(){
      $('.nav').removeClass('active');
      $('.burger').removeClass('active');
   });
});



window.addEventListener("orientationchange", function() {
   jQuery("#mainmenu").hide(0);
}, false);