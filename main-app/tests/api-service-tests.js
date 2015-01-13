(function() {
    'use strict';
    describe('testing the api service', function () {

        var $httpBackend;
        var gameApi;

        beforeEach(function(){
            module('tombola.noughtsAndCrosses.apiService');
            inject(function($injector){
                $httpBackend = $injector.get('$httpBackend');
                gameApi = $injector.get('apiService');
            });
        });

        it('check a random vs random game for a win', function () {
          $httpBackend
                .expectPOST('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',{'player1':'random','player2':'random'})
                .respond({"outcome":"Win","gameboard":"220111210","winner":"1"});
            gameApi
                .newGame('random','random')
                .then(function(data){
                    expect(data.outcome).to.equal('Win');
                    expect(data.gameboard).to.equal('220111210');
                    expect(data.winner).to.equal('1');
                });


        });

        it('check a random vs random game for a draw', function () {
            $httpBackend
                .expectPOST('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',{'player1':'random','player2':'random'})
                .respond({"outcome":"Draw","gameboard":"112221112","winner":0});
            gameApi
                .newGame('random','random')
                .then(function(data){
                    expect(data.outcome).to.equal('Draw');
                    expect(data.gameboard).to.equal('112221112');
                    expect(data.winner).to.equal(0);
                });


        });

        it('check a random vs pre-trained game for a win', function () {
            $httpBackend
                .expectPOST('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',{'player1':'random','player2':'pre-trained'})
                .respond({"outcome":"Win","gameboard":"112121202","winner":"2"});
            gameApi
                .newGame('random','pre-trained')
                .then(function(data){
                    expect(data.outcome).to.equal('Win');
                    expect(data.gameboard).to.equal('112121202');
                    expect(data.winner).to.equal('2');
                });


        });

        it('check a random vs pre-trained game for a draw', function () {
            $httpBackend
                .expectPOST('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',{'player1':'random','player2':'pre-trained'})
                .respond({"outcome":"Draw","gameboard":"212121121","winner":0});
            gameApi
                .newGame('random','pre-trained')
                .then(function(data){
                    expect(data.outcome).to.equal('Draw');
                    expect(data.gameboard).to.equal('212121121');
                    expect(data.winner).to.equal(0);
                });

        });

        it('check a random vs human game for a win', function () {
            $httpBackend
                .expectPOST('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove',{'playerNumber':2,'chosenSquare': '2'})
                .respond({"outcome":"Win","gameboard":"012120210","winner":"2"});
            gameApi
                .makeMove('2',2)
                .then(function(data){
                    expect(data.outcome).to.equal('Win');
                    expect(data.gameboard).to.equal('012120210');
                    expect(data.winner).to.equal('2');
                });

        });

        it('check a random vs human game for a draw', function () {
            $httpBackend
                .expectPOST('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove',{'playerNumber':2,'chosenSquare': '2'})
                .respond({"outcome":"Draw","gameboard":"121122211","winner":0});
            gameApi
                .makeMove('2',2)
                .then(function(data){
                    expect(data.outcome).to.equal('Draw');
                    expect(data.gameboard).to.equal('121122211');
                    expect(data.winner).to.equal(0);
                });

        });



afterEach(function(){
                $httpBackend.flush();
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();

            }
        );


    });
})();
