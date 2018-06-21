/Скрипт для кнопки "наверх"/
$(function () {

    var scroll_timer;
    var displayed = false;
    var $message = $('#message a');
    var $window = $(window);
    var top = $(document.body).children(0).position().top;

$window.scroll(function () {
    window.clearTimeout(scroll_timer);
scroll_timer = window.setTimeout(function () {
    if($window.scrollTop() <= top) {
        displayed = false;
        $message.fadeOut(500);
    }
    else if(displayed == false) {
        displayed = true;
        $message.stop(true, true).show().click(function () { $message.fadeOut(500); });
    }
}, 100);
});
});

/Скрипт анимационные эффекты/
$(document).ready(function(){

    $("#headerwrap .animated_1").eq(0).addClass('animated bounceInLeft');
});