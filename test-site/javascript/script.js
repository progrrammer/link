$(function(){
       $('.slider__inner, .news-slider-inner').slick({
           nextArrow:'<button type="button" class="slick-next slick-btn"></button>',
prevArrow:'<button type="button" class="slick-prev slick-btn"></button>',
infinite:false,
       }); 
    $('select').styler();
});
$("#test-a, #test-b").on('click', function() {
  $.fancybox.open('<div class="message" id="fancy"><form><input type="text" placeholder="Ваше имя"><input type="text" placeholder="Ваш номер телефона"><input type="submit" value="Отправить"></form></div>');
});
    $('.header-btn-menu').on('click',function(){
        $('.menu ul').slideToggle();
    });