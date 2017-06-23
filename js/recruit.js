$(function(){

  $('.recruit_main button').click(function(){

    $('.recruit_form').css({
      'display' : 'block',
      'position' : 'absolute',
      'top' : '0',
      'left' : '0',
      'right' : '0',
      'bottom' : '0',
      'margin' : 'auto'
    })
  })
  $('form input[type="reset"]').click(function(){
    $('.recruit_form').css('display','none');
  })
})
