$(function() {
 let navbar = $('.navbar');
 let navbarHeight = navbar.height(); // вычисление высоты шапки
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    navbar.addClass('navbar_fixed');
    $('body').css({
       'paddingTop': navbarHeight+'px' // отступ у body, равный высоте шапки
    });
   } else {
    navbar.removeClass('navbar_fixed');
    $('body').css({
     'paddingTop': 0 // удаление отступа у body, равный высоте шапки
    })
   }
 });
});