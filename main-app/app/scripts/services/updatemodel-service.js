(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .service('updateModel', ['gameModel', 'playersService', function (gameModel, playersService) {

            var update = function (data) {
                gameModel.outcome = data.outcome;
                gameModel.gameboard = data.gameboard;
                gameModel.winner = data.winner;
                playersService.changeCurrentPlayer();
            };

            this.updateCurrentModel = function (data) {
                update(data);
            };
        }]);
})();