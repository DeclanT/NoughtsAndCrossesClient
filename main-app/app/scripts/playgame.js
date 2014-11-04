/**
 * Created by declan.taylor on 09/10/2014.
 * updated by David Robson 21/10/2014.
 */

var userChoice;
var playerTurn;

playerTurn=1;

var showNought = function(){
    var img =document.getElementById('nought'+userChoice);
    img.classList.add('showimg');
    hideButton();
};

var showCross = function(){
    var img =document.getElementById('cross'+userChoice);
    img.classList.add('showimg');
    hideButton();
};

var hideButton = function(){
    var button =document.getElementById(userChoice);
    button.classList.add('hidebutton');
};
var makeChoice = function(id){
    userChoice=id;


    if (playerTurn === 1){
        showNought();
        makeMove(playerTurn, userChoice);
        playerTurn =2;
    }

    else {
        showCross();
        makeMove(playerTurn, userChoice);
        playerTurn=1;
    }

};



var newGame= function(){

    if (confirm('Are you sure you want to start a new game?')){

        for (var i = 0; i < 9; i++) {
            var button=document.getElementById(i);
            button.classList.remove('hidebutton');
            var img=document.getElementById('nought'+i);
            img.classList.remove('showimg');
            var img2=document.getElementById('cross'+i);
            img2.classList.remove('showimg');
        }

        var player1Type;

        if (document.getElementById('player1Human').checked){
            player1Type = document.getElementById('player1Human').value;
        }

        else if (document.getElementById('player1Random').checked){
            player1Type= document.getElementById('player1Random').value;
        }

        else if (document.getElementById('player1PreTrained').checked){
            player1Type= document.getElementById('player1PreTrained').value;
        }


        var player2Type;

        if (document.getElementById('player2Human').checked){
            player2Type = document.getElementById('player2Human').value;
        }

        else if (document.getElementById('player2Random').checked){
            player2Type= document.getElementById('player2Random').value;
        }

        else if (document.getElementById('player2PreTrained').checked){
            player2Type= document.getElementById('player2PreTrained').value;
        }

        makeNewGame(player1Type,player2Type);

        playerTurn =1;
    }

};


var makeNewGame = function(player1Type,player2Type) {
    var playerTypes = {player1:player1Type, player2:player2Type};
    var url=('http://tictactoe.cloudapp.net:35000/api/v1.0/newgame');
    serverPost(url,playerTypes);
};

var makeMove = function(playerTurn,id) {
    var sendMove = {playerNumber:playerTurn, chosenSquare:id};
    var url = ('http://tictactoe.cloudapp.net:35000/api/v1.0/makemove');
    serverPost(url,sendMove);
};

var serverPost = function(url,sendData){
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('POST',url,true);
    statechange(xmlHttpRequest);
    xmlHttpRequest.withCredentials = true;
    xmlHttpRequest.setRequestHeader('content-type','application/json;charset=UTF-8');
    xmlHttpRequest.send(JSON.stringify(sendData));
};

var handleWin = function(winner){
    if (winner==='1')
    {
        alert('Player One has won!');
    }
    else if (winner==='2')
    {
        alert('Player Two has won!');
    }
};

var handleDraw = function (){
    alert('Game was a draw');
};

var updateGameBoard = function(gameboard){
  for (var i = 0; i < 9; i++) {
      var currentPosition = gameboard.substring(i,i+1);
      userChoice = i;
      if (currentPosition === '1'){
          showNought();
      }
      else if(currentPosition==='2'){
          showCross();
      }
  }
};
var handSuccessfulResponse= function (response){
    if (response.outcome === 'Win')
    {
        updateGameBoard(response.gameboard);
        handleWin(response.winner);
    }
    else if (response.outcome === 'Draw')
    {
        updateGameBoard(response.gameboard);
        handleDraw();
    }
    else {
        updateGameBoard(response.gameboard);
    }
};

var statechange = function(xmlHttpRequest){

    xmlHttpRequest.onreadystatechange = function () {


        if (xmlHttpRequest.readyState === 4)
        {
            if (xmlHttpRequest.status === 200)
            {
                var response = JSON.parse(xmlHttpRequest.responseText);
                handSuccessfulResponse(response);
            }
        }
    };
};

