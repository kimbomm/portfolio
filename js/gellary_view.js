$(function(){
  var view_img = [];
  for(i=0; i<$('.gellary_view li').length -1 ; i++){
    view_img.push($('.gellary_view li').eq(i).find('img').attr('src'))
  }

  var nextControl = 1;
  var prevControl = 1;
  $('.gellary_view .next').click(function(){
    for(i=0, j=nextControl, k=0; i<$('.gellary_view li').length -1 ; i++){
      k=i+j;
      $('.gellary_view li').eq(i).find('img').attr('src', view_img[k]);
      if(k >= 5){
        $('.gellary_view li').eq(i).find('img').attr('src', view_img[k-5]);
      }
    }
    prevControl = 6 - nextControl;
    nextControl++;
    if(nextControl > 5){
      nextControl = 1;
    }
  })
  $('.gellary_view .prev').click(function(){
    for(i=0, j=prevControl, k=0; i<$('.gellary_view li').length -1 ; i++){
      k=i-j;
      $('.gellary_view li').eq(i).find('img').attr('src', view_img[k]);
      if(k < 0){
        $('.gellary_view li').eq(i).find('img').attr('src', view_img[k+5]);
      }
    }
    nextControl = 6 - prevControl;
    prevControl++;
    if(prevControl > 5){
      prevControl = 1;
    }
  })
})
