(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses')
        .controller('noughtsAndCrossesController', ['$scope', 'gameModel', 'apiService', 'audioService', function ($scope, gameModel, apiService,audioService) {

            $scope.gameModel = gameModel;

            $scope.newGame = function() {
                apiService.newGame($scope.gameModel.player1, $scope.gameModel.player2)
                    .then(
                    function(data){
                        $scope.gameModel.updateModel(data);
                        $scope.gameModel.newGame();
                        if ($scope.gameModel.player1 !== 'human') {
                            audioService.playclick();
                        }
                    },
                    function(message){
                        alert(message);
                    }
                );
                $scope.gameModel.newGame();
            };

            $scope.makeMove = function (squareNumber) {
                apiService.makeMove(squareNumber, $scope.gameModel.currentPlayer)
                    .then(
                    function(data){
                        $scope.gameModel.updateModel(data);
                        $scope.gameModel.changeCurrentPlayer();

                            audioService.playclick();
                    },
                    function(message){
                        alert(message);
                    }
                );
            };

            $scope.changePlayer1Type = function () {
                $scope.gameModel.switchPlayer1();
            };

            $scope.changePlayer2Type = function () {
                $scope.gameModel.switchPlayer2();
            };


        }]);
})();