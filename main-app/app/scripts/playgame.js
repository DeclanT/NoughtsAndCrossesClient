/**
 * Created by declan.taylor on 09/10/2014.
 */

var userchoice;
var playerturn;

playerturn="player1";

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
    playerturn ="2";
    }

else {
    showcross();
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
        submit()
}

};

var submit = function() {

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST","http://tictactoe.cloudapp.net:35000/api/v1.0/newgame", true);

    xmlHttpRequest.onreadystatechange= function () {
        var response = xmlHttpRequest.responseText ;

        if (xmlHttpRequest.readyState === 4) {

            if (xmlHttpRequest.status === 200) {
                alert(response);
            }

            else {
                alert(response);
            }
        }
    };

    xmlHttpRequest.withCredentials = true;

    xmlHttpRequest.setRequestHeader("content-type","application/json;charset=UTF-8");


    var playertypes = {player1:"random", player2:"random"};

    xmlHttpRequest.send(JSON.stringify(playertypes));


};