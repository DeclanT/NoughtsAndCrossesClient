(function() {
  'use strict';
    angular.module('tombola.noughtsAndCrosses.gameModel')
        .constant('gameConstants',function () {

            return{
                outcome:'continue',
                gameboard:'000000000',
                winner:0,
                player1:'human',
                player2:'random',
                currentPlayer:1,
                score:{
                    player1: 0,
                    player2: 0
                }
            };

        });
})();
