/**
 * Created by declan.taylor on 09/10/2014.
 * updated by David Robson 21/10/2014.
 */

var userChoice;
var playerTurn;

playerTurn=1;

var showNought = function(){
    var img =document.getElementById("nought"+userChoice);
    img.classList.add("showimg");
};

var showCross = function(){
    var img =document.getElementById("cross"+userChoice);
    img.classList.add("showimg");
};


var makeChoice = function(id){
    userChoice=id;
    var button =document.getElementById(userChoice);
    button.classList.add("hidebutton");

    if (playerTurn === 1){
        showNought();
        makeMove(playerTurn, userChoice)
        playerTurn =2;
    }

    else {
        showCross();
        makeMove(playerTurn, userChoice)
        playerTurn=1;
    }



};



var newGame= function(){

    if (confirm("Are you sure you want to start a new game?")){

        for (var i = 0; i < 9; i++) {
            var button=document.getElementById(i);
            button.classList.remove("hidebutton");
            var img=document.getElementById("nought"+i);
            img.classList.remove("showimg");
            var img2=document.getElementById("cross"+i);
            img2.classList.remove("showimg");
        }

        var player1Type;

        if (document.getElementById("player1Human").checked){
            player1Type = document.getElementById("player1Human").value;
        }

        else if (document.getElementById("player1Random").checked){
            player1Type= document.getElementById("player1Random").value
        }

        else if (document.getElementById("player1PreTrained").checked){
            player1Type= document.getElementById("player1PreTrained").value
        }


        var player2Type;

        if (document.getElementById("player2Human").checked){
            player2Type = document.getElementById("player2Human").value;
        }

        else if (document.getElementById("player2Random").checked){
            player2Type= document.getElementById("player2Random").value
        }

        else if (document.getElementById("player2PreTrained").checked){
            player2Type= document.getElementById("player2PreTrained").value
        }


        submit(player1Type,player2Type)
        playerTurn =1;
    }

};

var submit = function(player1Type,player2Type) {

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST","http://tictactoe.cloudapp.net:35000/api/v1.0/newgame", true);

    xmlHttpRequest.onreadystatechange= function () {
        var response = xmlHttpRequest.responseText ;

        if (xmlHttpRequest.readyState === 4) {

            if (xmlHttpRequest.status === 200) {

                if (response.substring(12,15) === "Win"){

                    if (response.substring(51,52)==="1"){
                        alert("Player One has won!")
                    }

                    else if (response.substring(51,52) === "2"){
                        alert("Player Two has won!")
                    }
                }

                else if (response.substring(12,16) === "Draw"){
                    alert("Game was a draw")
                }
            }

        }
    };

    xmlHttpRequest.withCredentials = true;

    xmlHttpRequest.setRequestHeader("content-type","application/json;charset=UTF-8");


    var playerTypes = {player1:player1Type, player2:player2Type};

    xmlHttpRequest.send(JSON.stringify(playerTypes));
};

var makeMove = function(playerTurn,id) {

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST","http://tictactoe.cloudapp.net:35000/api/v1.0/makemove", true);


    xmlHttpRequest.withCredentials = true;
    xmlHttpRequest.setRequestHeader("content-type","application/json;charset=UTF-8");


    xmlHttpRequest.onreadystatechange= function () {
        var response = xmlHttpRequest.responseText ;

        if (xmlHttpRequest.readyState === 4) {

            if (xmlHttpRequest.status === 200) {

                if (response.substring(12,15) === "Win"){

                    if (response.substring(51,52)==="1"){
                        alert("Player One has won!")
                    }

                    else if (response.substring(51,52) === "2"){
                        alert("Player Two has won!")
                    }
                }

                else if (response.substring(12,16) === "draw"){
                    alert("Game was a draw")
                }
            }
        }

        else {

        }
    };

    var makeMove = {"playerNumber":playerTurn, "chosenSquare":id};

    xmlHttpRequest.send(JSON.stringify(makeMove));


};



}
