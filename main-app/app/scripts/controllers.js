(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .controller('noughtsAndCrossesController', ['$scope', '$http', 'gameModel', 'apiService', function ($scope, $http, gameModel, apiService) {

            $scope.gameModel = gameModel;

            $scope.newGame = function() {
                apiService.newGame($scope.gameModel.player1, $scope.gameModel.player2)
                    .then(
                    function(data){
                        $scope.gameModel.updateModel(data);
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
                        $scope.gameModel.updateModel(data);
                        $scope.gameModel.changeCurrentPlayer();
                    },
                    function(message){
                        alert(message);
                    }
                );
            };

            $scope.changePlayer1Type = function () {
                $scope.gameModel.changePlayerType();
            };

            $scope.changePlayer2Type = function () {
                $scope.gameModel.changePlayer2Type();
            };

        }]);
})();