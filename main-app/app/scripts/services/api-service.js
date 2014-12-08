angular.module('noughtsAndCrossesApp').
    service('apiService',['$http','gameModel','updateModel','handleOutcome',function($http,gameModel,updateModel,handleOutcome) {

    this.makeMove = function (squareNumber) {
        makeCall('http://tictactoe1.cloudapp.net:35000/api/v1.0/makemove',{'playerNumber': gameModel.currentPlayer, 'chosenSquare': squareNumber});
    };

    this.newGame = function(){
        makeCall('http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame',{'player1':gameModel.player1,'player2':gameModel.player2});
    };

    var makeCall = function(url,data) {
        var serverPost = {
            method: 'POST',
            url: url,
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
            },
            data: data,
        };

        $http(serverPost).
            success(function (data) {
                updateModel.updateCurrentModel(data);
                handleOutcome.handle();
            });

        };
}]);
