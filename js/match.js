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

    function month_title(control2){
        var html = '<span class="month">'+control2+'</span>'
        $('.match_schedule .month_wrap').append(html);

    };
    $('.month_wrap>span').remove();
   $('.month_date li').remove();
   var month = new Date();
   month_title(month.getMonth());
   calendar(month.getMonth());

   var match_next = 1;
   var match_prev = 1;

   $('.match_schedule .next').click(function(){
       $('.month_wrap>span').remove();
       $('.month_date li').remove();
       month_title(month.getMonth() + match_next);
       calendar(month.getMonth() + match_next);
       match_prev = match_next -1;
       match_next++;
   });


   $('.match_schedule .prev').click(function(){
       $('.month_wrap>span').remove();
       $('.month_date li').remove();
       month_title(month.getMonth() + match_prev);
       calendar(month.getMonth() + match_prev);
       match_next = match_prev +1;
       match_prev--;
   })

   //경기일정 출력하기

   // function match(i){
   //
   //     var html = "";
   //
   //          html += '<div class="match_date">';
   //          html += '<span>' + match.calendar[i].month + '</span>';
   //          html += '<span>'+math.calendar[i].time+'</span>';
   //          html += '</div>';
   //          html += '<div class="match_status">';
   //          html += '<span>경기전</span>';
   //          html += '</div>';
   //          html += '<div class="match_team">';
   //          html += '<a href="match_view.html">';
   //          html += '<div class="first_team">';
   //          html += '<span class="name">'+match.calendar[i].home+'</span>';
   //          html += '<span class="score">'+match.calendar[i].home_score+'</span>';
   //          html += '</div>';
   //          html += '<div class="second_team">';
   //          html += '<span class="score">'+match.calendar[i].away_score+'</span>';
   //          html += '<span class="name">'+match.calendar[i].away+'</span>';
   //          html += '</div>';
   //          html += '</a>';
   //          html += '</div>';
   //          html += '<div class="match_stadium">';
   //          html += '<span>'+match.calendar[i].stadium+'</span>';
   //          html += '</div>';
   //
   //      $('.schedule .match_info').append(html);
   //
   // };
   // $('.schedule .match_info div').remove();
   // match(0);

 })

})
