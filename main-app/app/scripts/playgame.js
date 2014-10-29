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
};

var showCross = function(){
    var img =document.getElementById('cross'+userChoice);
    img.classList.add('showimg');
};


var makeChoice = function(id){
    userChoice=id;
    var button =document.getElementById(userChoice);
    button.classList.add('hidebutton');

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

        newgame(player1Type,player2Type);

        playerTurn =1;
    }

};

var newgame = function(player1Type,player2Type) {

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

var statechange = function(xmlHttpRequest){

    xmlHttpRequest.onreadystatechange= function () {
        var response = xmlHttpRequest.responseText.toLowerCase() ;
        if (xmlHttpRequest.readyState === 4) {
            if (xmlHttpRequest.status === 200) {
                if (response.indexOf('win')>-1){
                    if (response.substring(51,52)==='1'){
                        alert('Player One has won!');
                    }
                    else if (response.substring(51,52) === '2'){
                        alert('Player Two has won!');
                    }
                }
                else if (response.indexOf('draw')>-1){
                    alert('Game was a draw');
                }
            }
        }
        else {
        }
    };
};
