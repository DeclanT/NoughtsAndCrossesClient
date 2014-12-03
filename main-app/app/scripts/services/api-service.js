noughtsAndCrossesApp.service('apiService',function($http,gameModel) {



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
                    gameModel.updateModel(data);
                });

        };

        this.makeMove = function (squareNumber) {
            var url ='http://tictactoe1.cloudapp.net:35000/api/v1.0/makemove';
            var data= {'playerNumber': gameModel.currentPlayer, 'chosenSquare': squareNumber};
            makeCall(url,data)
        };

        this.newGame = function(){
            var url='http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
            var data={'player1':gameModel.player1,'player2':gameModel.player2};
            makeCall(url,data)
        }


});
