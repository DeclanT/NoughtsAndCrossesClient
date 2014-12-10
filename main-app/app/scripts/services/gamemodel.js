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
                this.currentPlayer= 1;

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

                this.changePlayer1Type = function () {
                    var me = this;
                    if (me.player1 === 'human') {
                        me.player1 = 'random';
                    }
                    else if (me.player1 === 'random') {
                        me.player1 = 'pre-trained';
                    }
                    else {
                        me.player1 = 'human';
                    }
                };

                this.changePlayer2Type = function () {
                    var me = this;
                    if (me.player2 === 'human') {
                        me.player2 = 'random';
                    }
                    else if (me.player2 === 'random') {
                        me.player2 = 'pre-trained';
                    }
                    else {
                        me.player2 = 'human';
                    }
                };

                this.changeCurrentPlayer = function () {
                    var me = this;
                    if (me.currentPlayer === 1 && me.player2 === 'human') {
                        me.currentPlayer = 2;
                    }
                    else if (me.currentPlayer === 2 && me.player1 === 'human') {
                        me.currentPlayer = 1;
                    }

                };
        };

            return new Model();

    });
})();

