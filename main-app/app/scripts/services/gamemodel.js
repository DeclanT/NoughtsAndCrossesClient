noughtsAndCrossesApp.service('gameModel',function() {


    return {
        outcome:'Continue',
        gameboard :'000000000',
        winner:0,

        player1:'human',
        player2:'random',
        currentPlayer:1,

        changePlayer1Type: function(){
            var me = this;
            if (me.player1==='human'){
                me.player1='random';
            }
            else if (me.player1==='random'){
                me.player1='pre-trained';
            }
            else {
                me.player1='human';
            }
        },

        changePlayer2Type: function(){
            var me = this;
            if (me.player2==='human'){
                me.player2='random';
            }
            else if (me.player2==='random'){
                me.player2='pre-trained';
            }
            else {
                me.player2='human';
            }
        },

        changeCurrentPlayer:function(){
            var me=this;
            if(me.currentPlayer===1 && me.player2==='human'){
                me.currentPlayer=2;
            }
            else if(me.currentPlayer===2 && me.player1==='human'){
                me.currentPlayer=1;
            }
        },

        updateModel:function(data){
            var me = this;
            me.outcome = data.outcome;
            me.gameboard = data.gameboard;
            me.winner = data.winner;
            me.changeCurrentPlayer();
        },

    };

});