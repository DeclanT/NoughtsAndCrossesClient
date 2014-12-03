noughtsAndCrossesApp.service('gameModel',function() {


    return {
        outcome:'Continue',
        gameboard :'000000000',
        winner:0,

        player1:'human',
        player2:'random',
        currentPlayer:1,

        updateModel:function(data){
            var me = this;
            me.outcome = data.outcome;
            me.gameboard = data.gameboard;
            me.winner = data.winner;
            me.changeCurrentPlayer();
        },

    };

});