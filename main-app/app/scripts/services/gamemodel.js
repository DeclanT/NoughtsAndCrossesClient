(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .service('gameModel',function () {

            var Model = function(){
                this.outcome='Continue';
                this.gameboard='000000000';
                this.winner= 0;
                this.player1='human';
                this.player2= 'random';
                this.currentPlayer=1;


                this.newGame = function(){
                    var me = this;
                    if(me.player1==='human'){
                        me.currentPlayer=1;
                    }

                    else if(me.player2==='human'){
                        me.currentPlayer=2;
                    }
                };

                this.handle = function (data) {
                    var me = this;
                    if (data.outcome === 'Win') {
                        handleWin(data,me);

                    }
                    else if (data.outcome === 'Draw') {
                        handleDraw();
                    }
                };

                var handleWin = function (data,me) {
                    for (var i = 0; i < 9; i++) {
                        me.gameboard[i] = data.winner;
                    }
                    var message = ('player' + data.winner + ' has won');
                    displayMessage(message);
                };

                var handleDraw = function () {
                    var message = 'the game was a draw!';
                    displayMessage(message);
                };

                var displayMessage= function(message){
                  alert(message);
                };

                this.updateModel = function (data) {
                    var me = this;
                    me.outcome = data.outcome;
                    me.gameboard = data.gameboard;
                    me.winner = data.winner;
                    me.handle(data);
                };

                var nextPlayerType = function (currentType){
                    if(currentType=== 'random'){
                        return 'human';
                    }
                    if(currentType=== 'human'){
                        return 'pre-trained';
                    }
                    return 'random';
                };

                this.switchPlayer1 = function(){
                    var me = this;
                    me.player1  = nextPlayerType(me.player1);
                };
                this.switchPlayer2 = function() {
                    var me = this;
                    me.player2 = nextPlayerType(me.player2);
                };


                this.changeCurrentPlayer = function () {
                    var me = this;
                    if (me.player1 !== 'human') {
                        return;
                    }
                    if (me.player2 !== 'human' ) {
                        return;
                    }

                    me.currentPlayer = me.currentPlayer===1?2:1;

                };
        };

            return new Model();

    });
})();

