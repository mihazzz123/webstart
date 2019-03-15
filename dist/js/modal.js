$(document).ready(function(){
  var button = $('#button');
  var modal = $('.modal');
  var closeBtn = $('#close-btn');
  var btnUp = $('#go-top');
  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки

button.on('click', function(){
  modal.addClass('modal-active');
});

closeBtn.on('click', function(){
  modal.removeClass('modal-active');
});

$(window).scroll(function () { 
  if($(this).scrollTop() != 0){
    $('#go-top').fadeIn();
  } else {
    $('#go-top').fadeOut();
    }
    });
    $('#go-top').click(function() {
    $('body,html').animate({scrollTop:0},900);
});

});