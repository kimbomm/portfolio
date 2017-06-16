$(function(){

  //선수 이미지 바뀌기, 선수정보 가져오기
  $('.other_img img').click(function(){

    var player_idx = $(this).parents('li').index();

    //선수 정보가져오기
    $.get('../json/team.json', function(team){

      var playName = team.player[player_idx].name;
      var playPosition = team.player[player_idx].position;
      var playNumber = team.player[player_idx].number;
      var playJoin = team.player[player_idx].join;
      var playTall = team.player[player_idx].tall;
      var playBirth = team.player[player_idx].birth;
      var playWeight = team.player[player_idx].weight;
      var playFoot = team.player[player_idx].foot;
      var playBlood = team.player[player_idx].blood;
      var playEnter = team.player[player_idx].enter;
      var playChange = team.player[player_idx].change;
      var playGoal = team.player[player_idx].goal;
      var playAssist = team.player[player_idx].assist;
      var playWarning = team.player[player_idx].warning;
      var playOut = team.player[player_idx].out;
      var playProfile = team.player[player_idx].profile;


      $('.player .position').html(playPosition);
      $('.player .name').html(playName);
      $('.player .number').html(playNumber);
      $('.details .join').html(playJoin);
      $('.details .height').html(playTall);
      $('.details .birth').html(playBirth);
      $('.details .weight').html(playWeight);
      $('.details .foot').html(playFoot);
      $('.details .blood').html(playBlood);
      $('.record_info .enter .score').html(playEnter);
      $('.record_info .change .score').html(playChange);
      $('.record_info .goal .score').html(playGoal);
      $('.record_info .assist .score').html(playAssist);
      $('.record_info .warning .score').html(playWarning);
      $('.record_info .out .score').html(playOut);
      $('.player_img img').attr('src',playProfile);


    }, 'json');
  })


  //선수 슬라이드
  var player_left = [];
  for(i=0; i<$('.player_other li').length; i++){
    player_left.push($('.player_other li').eq(i).position().left);
  }



  $('.player_other .next').click(function(){


  })

})
