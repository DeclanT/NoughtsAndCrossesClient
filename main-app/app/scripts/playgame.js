/**
 * Created by declan.taylor on 09/10/2014.
 * updated by David Robson 21/10/2014.
 */

var userchoice;
var playerturn;

playerturn="1";

var shownought = function(){
    var img =document.getElementById("nought"+userchoice);
    img.classList.add("showimg");
    };

var showcross = function(){
    var img =document.getElementById("cross"+userchoice);
    img.classList.add("showimg");
    };


var makeChoice = function(id){
    userchoice=id;
    var button =document.getElementById(userchoice);
    button.classList.add("hidebutton");

    if (playerturn === "1"){
    shownought();
        makemove(playerturn,id);
    playerturn ="2";
    }

else {
    showcross();
        makemove(playerturn,id);
    playerturn=("1")
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
}

};

var submit = function(player1Type,player2Type) {

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST","http://tictactoe.cloudapp.net:35000/api/v1.0/newgame", true);



<<<<<<< HEAD
            if (xmlHttpRequest.status === 200) {
                console.log(response);

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


            else {
                console.log(response);
            }
        }
        };
=======
    xmlHttpRequest.withCredentials = true;

    xmlHttpRequest.setRequestHeader("content-type","application/json;charset=UTF-8");


    var playertypes = {player1:"human", player2:"human"};



    xmlHttpRequest.send(JSON.stringify(playertypes));

    playerturn ="1"

};

var makemove = function(playerturn,id) {

    var xhttprequest = new XMLHttpRequest();
    xhttprequest.open("POST","http://tictactoe.cloudapp.net:35000/api/v1.0/makemove", true);


    xhttprequest.withCredentials = true;
    xhttprequest.setRequestHeader("content-type","application/json;charset=UTF-8");

    xhttprequest.onreadystatechange= function () {
        var response = xhttprequest.responseText ;

        if (xhttprequest.readyState === 4) {

            if (xhttprequest.status === 200) {
                console.log(response);

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
            console.log(response);
        }
    };
>>>>>>> GameState-Visualisation


    var makeMove = {"playerNumber":playerturn, "chosenSquare":id};

xhttprequest.send(JSON.stringify(makeMove));


}










<<<<<<< HEAD
    var playerTypes = {player1:player1Type, player2:player2Type};

    xmlHttpRequest.send(JSON.stringify(playerTypes));
};
=======

>>>>>>> GameState-Visualisation


