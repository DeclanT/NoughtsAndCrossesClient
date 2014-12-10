(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .controller('noughtsAndCrossesController', ['$scope', '$http', 'gameModel', 'apiService','updateModel', function ($scope, $http, gameModel, apiService,updateModel) {

            $scope.gameModel = gameModel;

            $scope.newGame = function() {
                apiService.newGame($scope.gameModel.player1, $scope.gameModel.player2)
                    .then(
                    function(data){
                        updateModel.updateCurrentModel(data);
                        $scope.gameModel.changeCurrentPlayer();
                    },
                    function(message){
                        alert(message);
                    }
                );
            };

            $scope.makeMove = function (squareNumber) {
                apiService.makeMove(squareNumber, $scope.gameModel.currentPlayer)
                    .then(
                    function(data){
                        updateModel.updateCurrentModel(data);
                        $scope.gameModel.changeCurrentPlayer();
                    },
                    function(message){
                        alert(message);
                    }
                );
            };

            $scope.changePlayer1Type = function () {
                $scope.gameModel.changePlayer1Type();
            };

            $scope.changePlayer2Type = function () {
                $scope.gameModel.changePlayer2Type();
            };

        }]);
})();