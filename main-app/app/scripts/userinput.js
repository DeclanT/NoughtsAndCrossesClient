var makeChoice = function(id){
    userChoice=id;


    if (playerTurn === 1){
        makeMove(playerTurn, userChoice);
        playerTurn =2;
    }

    else {
        makeMove(playerTurn, userChoice);
        playerTurn=1;
    }

};

var getPlayerTypes = function(){
    var player1Type;
    var player2Type;

    if (document.getElementById('player1Human').checked){
        player1Type = document.getElementById('player1Human').value;
    }

    else if (document.getElementById('player1Random').checked){
        player1Type= document.getElementById('player1Random').value;
    }

    else if (document.getElementById('player1PreTrained').checked){
        player1Type= document.getElementById('player1PreTrained').value;
    }

    if (document.getElementById('player2Human').checked){
        player2Type = document.getElementById('player2Human').value;
    }

    else if (document.getElementById('player2Random').checked){
        player2Type= document.getElementById('player2Random').value;
    }

    else if (document.getElementById('player2PreTrained').checked){
        player2Type= document.getElementById('player2PreTrained').value;
    }

    playerTypes = {player1:player1Type, player2:player2Type};
};

var newGame= function(){

    if (confirm('Are you sure you want to start a new game?')){
        cleanBoard();
        getPlayerTypes();
        makeNewGame();
        playerTurn =1;
    }

};
