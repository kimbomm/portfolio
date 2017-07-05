$(function(){
  $.get('../js/team.json', function(team){

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

      html += '<li class="player"><a href="../build/team_view.html?seq='+i+'">';
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
        html += '<li class="player"><a href="../build/team_view.html?seq='+i+'">';
        html += '<div class="player_img">';
        html += '<img src="'+playPhoto[i]+'" alt="">';
        html += '</div>';
        html += '<div class="player_info">';
        html += '<span class="name">'+playName[i]+'</span>';
        html += '<span class="position">'+playPosition[i]+'</span>';
        html += '<span class="number">'+playNumber[i]+'</span>';
        html += '</div>';
        html += '</a></li>';

        if(attr == team.player[i].position){
          $('body .team_list .inner ul').append(html);
        }else if(attr == "all"){
          $('body .team_list .inner ul').append(html);
        }
      }
    })


    //선수 슬라이드
    var listLength = 6;
    var offsetLeft = [];
    for(i=0; i<listLength; i++){
      offsetLeft.push($('.player_other li').eq(i).position().left)
    }

    for(i=0; i<listLength; i++){
      $('.player_other li').eq(i).css({
        'position' : 'absolute',
        'left' : offsetLeft[i]
      })
    }

    $('.player_other ul li').remove();

    function play_slider(Control){
      for(i = 0, j = Control; i < listLength; i++){
        var html = '';

        html += '<li>';
        html += '<div class="other_wrap">';
        html += '<div class="other_img">';
        html += '<img src="'+playPhoto[i+j]+'" alt="">';
        html += '</div>';
        html += '<span class="position">'+playPosition[i+j]+'</span>';
        html += '<span class="name">'+playName[i+j]+'</span>';
        html += '</div>';
        html += '</li>';

        $('.player_other ul').append(html);
      }
    }

    var playNext = 1;
    var playPrev = 0;
    play_slider(playPrev);

    $('.player_other .next').click(function(e){
      if(playNext == 9){
        e.preventDefault();
      }else{
        $('.player_other ul li').remove();
        play_slider(playNext);
        playPrev = playNext - 1;
        playNext++;
        console.log(playNext);
      }
    })
    $('.player_other .prev').click(function(e){
      if(playPrev < 0){
        e.preventDefault();
      }else{
        $('.player_other ul li').remove();
        play_slider(playPrev);
        playNext = playPrev + 1
        playPrev--;
        console.log(playPrev);
      }
    })


    //선수 이미지 바뀌기, 선수정보 가져오기
    function playInfo(i){
      $('.player_img img').attr('src',playProfile[i]);
      $('.player .position').html(playPosition[i]);
      $('.player .name').html(playName[i]);
      $('.player .number').html(playNumber[i]);
      $('.details .join').html(playJoin[i]);
      $('.details .height').html(playTall[i]);
      $('.details .birth').html(playBirth[i]);
      $('.details .weight').html(playWeight[i]);
      $('.details .foot').html(playFoot[i]);
      $('.details .blood').html(playBlood[i]);
      $('.record_info .enter .score').html(playEnter[i]);
      $('.record_info .change .score').html(playChange[i]);
      $('.record_info .goal .score').html(playGoal[i]);
      $('.record_info .assist .score').html(playAssist[i]);
      $('.record_info .warning .score').html(playWarning[i]);
      $('.record_info .out .score').html(playOut[i]);
    }


    $('.player_other').on('click','.other_img img',function(){

      var player_attr = $(this).attr('src');

      for(var i = 0; i < team.player.length; i++){
        if(player_attr == playPhoto[i]){
          playInfo(i);
        }
      }

    });

    var seq = location.href;
    seq = seq.split('?seq=');

    playInfo(seq[1]);


  }, 'json');

})
