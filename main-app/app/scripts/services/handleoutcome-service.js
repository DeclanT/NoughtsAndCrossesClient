(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .service('handleOutcome', ['gameModel', function (gameModel) {

            this.handle = function () {
                if (gameModel.outcome === 'Win') {
                    handleWin();
                }
                else if (gameModel.outcome === 'Draw') {
                    handleDraw();
                }
            };

            var handleWin = function () {
                alert('Player' + gameModel.winner + ' has WON!');
            };

            var handleDraw = function () {
                alert('game was a draw');
            };
        }]);
})();