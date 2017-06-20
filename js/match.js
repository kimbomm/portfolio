$(function(){
  $.get('../json/match.json', function(match){


    //달력만들기
    function calendar(control){

      var date = 1;
      for(i = 0; i < match.calendar[control].date.length; i++){
        var k = i + date;
        var html = "";

        html += '<li><a href=""><span>'+k+'</span></a></li>';

        $('.match_schedule .month_date').append(html);
      }
    }

    $('.month_date li').remove();
    var dat = new Date();
    var month = [];

    for(i=0; i<12; i++){
      month[i] = i+1;
    }

    $('.month_wrap .month').html(month[dat.getMonth()]);
    calendar(dat.getMonth());

    var match_next = 1;
    var match_prev = -1;

    // 다음 달 이동
    $('.match_schedule .next').click(function(){
      $('.month_date li').remove();
      $('.month_wrap .month').html(month[dat.getMonth()]+match_next);
      calendar(dat.getMonth()+match_next);
      match_prev = match_next -1;

      if(match.calendar[dat.getMonth()+match_next].month == 12){
        $(this).css('display','none');
      }else if(match.calendar[dat.getMonth()+match_next].month == 2){
        $('.match_schedule .prev').css('display','block')
      }
      calWidth(dat.getMonth()+match_next);
      match_next++;
    });

    // 이전 달 이동
    $('.match_schedule .prev').click(function(){
      $('.month_date li').remove();
      $('.month_wrap .month').html(month[dat.getMonth()]+match_prev);
      calendar(dat.getMonth()+match_prev);
      match_next = match_prev +1;

      if(match.calendar[dat.getMonth()+match_prev].month == 1){
        $(this).css('display','none');
      }else if(match.calendar[dat.getMonth()+match_prev].month == 11){
        $('.match_schedule .next').css('display','block')
      }
      calWidth(dat.getMonth()+match_prev);
      match_prev--;
    })

    //달력너비 맞추기
    function calWidth(i){
      if(match.calendar[i].date.length == 31){
        $('.match_schedule .month_date li').css({
          'width' : $('.match_schedule .inner').width() / 31,
          'height' : $('.match_schedule .inner').width() / 31
        })
      }
      else if(match.calendar[i].date.length == 30){
        $('.match_schedule .month_date li').css({
          'width' : $('.match_schedule .inner').width() / 30,
          'height' : $('.match_schedule .inner').width() / 30
        })
      }
    }



  })

  //경기일정 출력하기
  $.get('../json/match.json', function(match){


    function aa(i){
      var html='';

      html += '<div class="match_date">';
      html += '<span>' + match.calendar[i].month + '</span>';
      html += '<span>'+match.calendar[i].time+'</span>';
      html += '</div>';
      html += '<div class="match_status">';
      html += '<span>경기전</span>';
      html += '</div>';
      html += '<div class="match_team">';
      html += '<a href="match_view.html">';
      html += '<div class="first_team">';
      html += '<span class="name">'+match.calendar[i].home+'</span>';
      html += '<span class="score">'+match.calendar[i].home_score+'</span>';
      html += '</div>';
      html += '<div class="second_team">';
      html += '<span class="score">'+match.calendar[i].away_score+'</span>';
      html += '<span class="name">'+match.calendar[i].away+'</span>';
      html += '</div>';
      html += '</a>';
      html += '</div>';
      html += '<div class="match_stadium">';
      html += '<span>'+match.calendar[i].stadium+'</span>';
      html += '</div>';

      $('.schedule .match_info').append(html);
    }

    $('.schedule .match_info div').remove();
    aa(0)

  })
})
