(function() {
    'use strict';
    angular.module('noughtsAndCrossesApp').
        factory('audioService', ['$document', function ($document) {

           var AudioSprite = function() {
               var audioNode = angular.element('<audio id="soundSprite">');


               var createSourceNode = function() {
                   var sourceNode = angular.element('<source>');

                   sourceNode.attr('src','sounds/click.mp3');
                   sourceNode.attr('type','audio/mpeg');

                   return sourceNode;
               };

               audioNode.attr('preload', 'auto');
               audioNode.attr('src', 'sounds/click.mp3');
               audioNode.append(createSourceNode());



               this.playclick=function() {
                   $document.find('body').append(audioNode);
                   audioNode[0].play();
               };
           };

            return new AudioSprite();
        }]);
})();