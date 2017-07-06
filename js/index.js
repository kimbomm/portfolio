$(function(){

  // main slide
  var main_li = $('.main li').length;
  var main_idx = 0;
  var main_speed = 4500;

  var main_tri = function(){
    $('.main li.on').trigger('click');
  };

  var autoSlide = setInterval(main_tri, main_speed);
  $('.main li').mouseenter(function(){
    clearInterval(autoSlide);
  }).mouseleave(function(){
    autoSlide = setInterval(main_tri, main_speed);
  })

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
  var headHeight = $('header').height();
  var menuHeight = $('body').height();

  $(window).resize(function(){
    menu_width = $('body').width();
    menuHeight = $('body').height();
    if(menu_width > 580){
      $('.nav ul').css('display', 'block');
      $('.nav').css('height',menuHeight);
    }else if(menu_width < 581){
      if(menu_control == 0){
        $('.nav ul').css('display', 'none');
        $('.nav').css('height','80px');
      }else if(menu_control ==1){
        $('.nav ul').css('display', 'block');
        $('.nav').css('height',menuHeight);
      }
    }
  })

  var menu_control = 0;
  $('header .nav i').click(function(){
    if(menu_control == 0){
      $('.nav i').css({
        'background' : 'url("../assets/photo/icon/menu02.png") no-repeat center'
      });
      $('.nav').stop().animate({'height':menuHeight})
      $('.nav ul').slideDown();
      menu_control = 1;
    }else if(menu_control == 1){
      $('.nav i').css({
        'background' : 'url("../assets/photo/icon/menu01.png") no-repeat center'
      });
      $('.nav').stop().animate({'height':'80px'})
      $('.nav ul').slideUp();
      menu_control = 0;
    }
  })

  // 선수 random 출력
  $.get('../json/team.json', function(team){
    var ranNum = ["","",""];
    ranNum[0] = Math.floor(Math.random() * 4);
    ranNum[1] = Math.floor(Math.random() * 5) + 4;
    ranNum[2] = Math.floor(Math.random() * 5) + 9;
    for(i=0; i<$('.player_list li').length; i++){
      $('.player_list li').eq(i).find('img').attr('src',team.player[ranNum[i]].photo);
      $('.player_list li').eq(i).find('.name').html(team.player[ranNum[i]].name);
      $('.player_list li').eq(i).find('.position').html(team.player[ranNum[i]].position);
      $('.player_list li').eq(i).find('.number').html(team.player[ranNum[i]].number);
    }

  })


})
