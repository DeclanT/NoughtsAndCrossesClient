(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .service('gameModel', function () {
            return {
                outcome: 'Continue',
                gameboard: '000000000',
                winner: 0,

                player1: 'human',
                player2: 'random',
                currentPlayer: 1,

            };

        });
})();