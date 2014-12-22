(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.audio').
        factory('audioService', ['$document', function ($document) {

           var AudioSprite = function() {

               var clicksound = 'sounds/click.mp3';

               var audioNode = angular.element('<audio id="soundSprite">');

               var createSourceNode = function() {
                   var sourceNode = angular.element('<source>');
                   sourceNode.attr('src',clicksound);
                   sourceNode.attr('type','audio/mpeg');

                   return sourceNode;
               };

               audioNode.attr('preload', 'auto');
               audioNode.attr('src', clicksound);
               audioNode.append(createSourceNode());



               this.playclick=function() {
                   $document.find('body').append(audioNode);
                   audioNode[0].play();
               };
           };

            return new AudioSprite();
        }]);
})();