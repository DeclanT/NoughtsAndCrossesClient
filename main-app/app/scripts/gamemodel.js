noughtsAndCrossesApp.service('gameModel',function($http) {


    return {
        outcome:'Continue',
        gameboard :'000000000',
        winner:0,

        player1:'human',
        player2:'random',
        currentPlayer:1,
        serverPost : {
            method: 'POST',
            url: '',
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
            },
            data: '',
        },

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

        newGame: function () {
            var me = this;
            me.serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
            me.serverPost.data = {'player1':me.player1, 'player2':me.player2};
            $http(me.serverPost).
                success(function (data) {
                    me.outcome = data.outcome;
                    me.gameboard = data.gameboard;
                    me.winner = data.winner;
                    me.changeCurrentPlayer();
                });
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

        makeMove: function (squareNumber) {
            var me = this;
            me.serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/makemove';
            me.serverPost.data = {'playerNumber': me.currentPlayer, 'chosenSquare': squareNumber};
            $http(me.serverPost).
                success(function (data) {
                    me.outcome = data.outcome;
                    me.gameboard = data.gameboard;
                    me.winner = data.winner;
                    me.changeCurrentPlayer();
                });
        }
    };

});