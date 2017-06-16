$(function(){
  //팀원 리스트
  $.get('../json/team.json', function(team){

    //선수 데이터 변수
    var playName = [];
    var playPosition = [];
    var playNumber = [];
    var playJoin = [];
    var playTall = [];
    var playBirth = [];
    var playWeight = [];
    var playFoot = [];
    var playBlood = [];
    var playEnter = [];
    var playChange = [];
    var playGoal = [];
    var playAssist = [];
    var playWarning = [];
    var playOut = [];
    var playProfile = [];
    var playPhoto = [];

    // 선수 데이터 저장
    for(var i = 0; i < team.player.length; i++){
      playName.push(team.player[i].name);
      playPosition.push(team.player[i].position);
      playNumber.push(team.player[i].number);
      playJoin.push(team.player[i].join);
      playTall.push(team.player[i].tall);
      playBirth.push(team.player[i].birth);
      playWeight.push(team.player[i].weight);
      playFoot.push(team.player[i].foot);
      playBlood.push(team.player[i].blood);
      playEnter.push(team.player[i].enter);
      playChange.push(team.player[i].change);
      playGoal.push(team.player[i].goal);
      playAssist.push(team.player[i].assist);
      playWarning.push(team.player[i].warning);
      playOut.push(team.player[i].out);
      playPhoto.push(team.player[i].photo);
      playProfile.push(team.player[i].profile);
    }


    // 팀원 초기 리스트 작성
    $('body .team_list .inner').append('<ul></ul>');
    for(var i = 0; i < team.player.length; i++){
      var html = '';

      html += '<li class="player"><a href="../build/team_view.html">';
      html += '<div class="player_img">';
      html += '<img src="'+playPhoto[i]+'" alt="">';
      html += '</div>';
      html += '<div class="player_info">';
      html += '<span class="name">'+playName[i]+'</span>';
      html += '<span class="position">'+playPosition[i]+'</span>';
      html += '<span class="number">'+playNumber[i]+'</span>';
      html += '</div>';
      html += '</a></li>';

      $('body .team_list .inner ul').append(html);
    }


    //팀원 리스트 option 메뉴
    $('.team_menu li').click(function(){

      var attr = $(this).attr('class');
      $('.team_list .inner ul li').remove();
      for(var i = 0; i < team.player.length; i++){

        var html = '';
        html += '<li class="player">';
        html += '<div class="player_img">';
        html += '<img src="'+playPhoto[i]+'" alt="">';
        html += '</div>';
        html += '<div class="player_info">';
        html += '<span class="name">'+playName[i]+'</span>';
        html += '<span class="position">'+playPosition[i]+'</span>';
        html += '<span class="number">'+playNumber[i]+'</span>';
        html += '</div>';
        html += '</li>';

        if(attr == team.player[i].position){
          $('body .team_list .inner ul').append(html);
        }else if(attr == "all"){
          $('body .team_list .inner ul').append(html);
        }
      }
    })


    //선수 이미지 바뀌기, 선수정보 가져오기
    $('.other_img img').click(function(){

      var player_idx = $(this).parents('li').index();

      $('.player .position').html(playPosition[player_idx]);
      $('.player .name').html(playName[player_idx]);
      $('.player .number').html(playNumber[player_idx]);
      $('.details .join').html(playJoin[player_idx]);
      $('.details .height').html(playTall[player_idx]);
      $('.details .birth').html(playBirth[player_idx]);
      $('.details .weight').html(playWeight[player_idx]);
      $('.details .foot').html(playFoot[player_idx]);
      $('.details .blood').html(playBlood[player_idx]);
      $('.record_info .enter .score').html(playEnter[player_idx]);
      $('.record_info .change .score').html(playChange[player_idx]);
      $('.record_info .goal .score').html(playGoal[player_idx]);
      $('.record_info .assist .score').html(playAssist[player_idx]);
      $('.record_info .warning .score').html(playWarning[player_idx]);
      $('.record_info .out .score').html(playOut[player_idx]);
      $('.player_img img').attr('src',playProfile[player_idx]);

    });


    //선수 슬라이드
    var player_left = [];
    for(i=0; i<$('.player_other li').length; i++){
      player_left.push($('.player_other li').eq(i).position().left);
    }



    $('.player_other .next').click(function(){


    })


  }, 'json');

})
