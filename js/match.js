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
    calWidth(month[dat.getMonth()]);

    var match_next = 1;
    var match_prev = -1;

    // 다음 달 이동
    $('.match_schedule .next').click(function(){
      $('.month_date li').remove();
      $('.month_wrap .month').html(month[dat.getMonth()]+match_next);
      calendar(dat.getMonth()+match_next);

      $('.schedule .match_info div').remove();
      for(i=0; i<match.calendar[dat.getMonth()+match_next].date.length; i++){
        if(match.calendar[dat.getMonth()+match_next].date[i].time != null){
          aa(dat.getMonth()+match_next,i);
          bb(dat.getMonth()+match_next,i);
          $('.month_date li').eq(i).css('background-color','#00f');
        }
      }


      if(match.calendar[dat.getMonth()+match_next].month == 12){
        $(this).css('display','none');
      }else if(match.calendar[dat.getMonth()+match_next].month == 2){
        $('.match_schedule .prev').css('display','block')
      }
      calWidth(dat.getMonth()+match_next);

      match_prev = match_next -1;
      match_next++;
    });


    // 이전 달 이동
    $('.match_schedule .prev').click(function(){
      // month 변경
      $('.month_date li').remove();
      $('.month_wrap .month').html(month[dat.getMonth()]+match_prev);
      calendar(dat.getMonth()+match_prev);

      // 경기일정 변경
      $('.schedule .match_info div').remove();
      for(i=0; i<match.calendar[dat.getMonth()+match_prev].date.length; i++){
        if(match.calendar[dat.getMonth()+match_prev].date[i].time != null){
          aa(dat.getMonth()+match_prev,i);
          bb(dat.getMonth()+match_prev,i);
          $('.month_date li').eq(i).css('background-color','#00f');
        }
      }

      // 방향키 제어
      if(match.calendar[dat.getMonth()+match_prev].month == 1){
        $(this).css('display','none');
      }else if(match.calendar[dat.getMonth()+match_prev].month == 11){
        $('.match_schedule .next').css('display','block')
      }

      // 달력생성
      calWidth(dat.getMonth()+match_prev);

      match_next = match_prev +1;
      match_prev--;
    })

    //달력너비 맞추기
    function calWidth(i){
      if(match.calendar[i].date.length == 31){
        $('.match_schedule .month_date li').css({
          'width' : $('.match_schedule .match_month').width() / 31,
          'height' : $('.match_schedule .match_month').width() / 31
        })
      }
      else if(match.calendar[i].date.length == 30){
        $('.match_schedule .month_date li').css({
          'width' : $('.match_schedule .match_month').width() / 30,
          'height' : $('.match_schedule .match_month').width() / 30
        })
      }else{
        $('.match_schedule .month_date li').css({
          'width' : $('.match_schedule .match_month').width() / match.calendar[i].date.length,
          'height' : $('.match_schedule .match_month').width() / match.calendar[i].date.length
        })
      }
    }


    //경기일정 출력하기
    function aa(i,j){
      var html='';
      var k = j+1;

      html += '<div class="match_date">';
      html += '<span class="month">' + match.calendar[i].month + '월 ' +'</span>';
      html += '<span class="date">' + k + '일 ' + '</span>';
      html += '<span class="time">'+match.calendar[i].date[j].time+'</span>';
      html += '</div>';
      html += '<div class="match_status">';
      html += '<span>경기전</span>';
      html += '</div>';
      html += '<div class="match_team">';
      html += '<a href="match_view.html?seq='+j+'&page-'+i+'">';
      html += '<div class="first_team">';
      html += '<span class="name">'+match.calendar[i].date[j].home+'</span>';
      html += '<span class="score">'+match.calendar[i].date[j].home_score+'</span>';
      html += '</div>';
      html += '<div class="second_team">';
      html += '<span class="score">'+match.calendar[i].date[j].away_score+'</span>';
      html += '<span class="name">'+match.calendar[i].date[j].away+'</span>';
      html += '</div>';
      html += '</a>';
      html += '</div>';
      html += '<div class="match_stadium">';
      html += '<span>'+match.calendar[i].date[j].stadium+'</span>';
      html += '</div>';

      $('.schedule .match_info').append(html);
    }

    //경기전, 후 결과 확인
    function bb(i,j){
      if((dat.getMonth() > match.calendar[i].month) || (dat.getDate() > j)){
        $('.match_status span').html('경기종료').css('color','#000');
      }
    }

    $('.schedule .match_info div').remove();
    for(i=0; i<match.calendar[dat.getMonth()].date.length; i++){
      if(match.calendar[dat.getMonth()].date[i].time != null){
        aa(dat.getMonth(),i)
        bb(dat.getMonth(),i)
        $('.month_date li').eq(i).css('background-color','#00f')
      }
    }

    //match_view  경기 일정 가져오기 js
    var seq = location.href;
    seq = seq.split('?');
    seq = seq[1].split('=');
    seq = seq[1].split('&page-');

    var idxMonth = seq[1]*1;
    var idxDate = seq[0]*1;

    function matchInfo(i,j){
      $('.match_date .date').html((i+1) +'월 '+ (j+1) + '일 ');
      $('.match_date .time').html(match.calendar[i].date[j].time);
      $('.first_team .name').html(match.calendar[i].date[j].home);
      $('.first_team .score').html(match.calendar[i].date[j].home_score);
      $('.second_team .name').html(match.calendar[i].date[j].away);
      $('.second_team .score').html(match.calendar[i].date[j].away_score);
      $('.match_stadium span').html(match.calendar[i].date[j].stadium);
    }
    matchInfo(idxMonth, idxDate);

    //이전 경기 이동
    $('.btngroup .prev').click(function(e){
      e.preventDefault();
      var prevMonth = idxMonth;
      var prevDate = idxDate;

      function prevMatch(j, k){
        for(i = j-1; i > -1; i--){
          if(match.calendar[k].date[i].time != null){
            matchInfo(k, i);
            location.href = '../build/match_view.html?seq='+i+'&page-'+k+'';
            break;
          }
        }
      }
      prevMatch(prevDate, prevMonth);

    });

    // 다음 경기 이동
    $('.btngroup .next').click(function(e){
      e.preventDefault();
      var nextMonth = idxMonth;
      var nextDate = idxDate;

      for(i = nextDate+1; i<match.calendar[nextMonth].date.length; i++){
        if(match.calendar[nextMonth].date[i].time != null){
          matchInfo(nextMonth, i);
          location.href = '../build/match_view.html?seq='+i+'&page-'+nextMonth+'';
          break;
        }
      }
    })


  })

})
