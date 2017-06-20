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
    main_slide(main_idx, '0', '-100%');
    main_idx++;
    main_slide(main_idx, '100%', '0');

    if(main_idx == main_li){
      main_idx = 0;
      main_slide(main_idx, '100%', '0');
    };
  })


  // toggle nav menu
  var menu_width = $('body').width();
  $(window).resize(function(){
    menu_width = $('body').width();
    if(menu_width > 580){
      $('.nav ul').css('display', 'block')
    }else if(menu_width < 581){
      if(menu_control == 0){
        $('.nav ul').css('display', 'none')
      }else if(menu_control ==1){
        $('.nav ul').css('display', 'block')
      }
    }
  })

  var menu_control = 0;
  $('header .nav i').click(function(){
    $('.nav ul').toggle();
    if(menu_control == 0){
      $('.nav i').css({
        'background' : 'url("../assets/photo/icon/menu02.png") no-repeat center'
      });
      menu_control = 1;
    }else if(menu_control == 1){
      $('.nav i').css({
        'background' : 'url("../assets/photo/icon/menu01.png") no-repeat center'
      });
      menu_control = 0;
    }
  })



})