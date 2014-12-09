(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp').
        service('apiService', ['$http','$q',  function ($http,$q) {

            this.makeMove = function (squareNumber,currentPlayer) {
                return makeCall('http://tictactoe1.cloudapp.net:35000/api/v1.0/makemove', {
                    'playerNumber': currentPlayer,
                    'chosenSquare': squareNumber
                });
            };

            this.newGame = function (player1,player2) {
                return makeCall('http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame', {
                    'player1':player1,
                    'player2':player2
                });
            };

            var makeCall = function (url, data) {

                var deferred =$q.defer();

                $http.post(url,data,{'withCredentials':'true'})

                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function(data,status){
                        var message = 'Something went wrong.' + ' Problem: ' + data + ' error status: ' + status;

                        deferred.reject(message);
                    });
                return deferred.promise;
            };
        }]);
})();