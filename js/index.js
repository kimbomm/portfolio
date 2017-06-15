$(function(){

  // main slide
  var main_li = $('.main li').length;
  var main_idx = 0;
  var main_speed = 4500;

  var main_tri = function(){
    $('.main li.on').trigger('click');
  };

  var autoSlide = setInterval(main_tri, main_speed);

  function main_slide(i, start, end){
    $('.main li').eq(i).addClass('on').css({
      'display':'block',
      'left': start
    }).stop().animate({
      'left': end
    }).siblings().removeClass('on');
  };

  $('.main li').click(function(){
    console.log(main_idx);
    main_slide(main_idx, '0', '-100%');
    main_idx++;
    console.log(main_idx);
    main_slide(main_idx, '100%', '0');

    if(main_idx == main_li){
      main_idx = 0;
      main_slide(main_idx, '100%', '0');
    };
  })


})
