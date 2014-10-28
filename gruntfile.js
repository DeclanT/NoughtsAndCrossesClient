var copyTask = require("./.grunt/copytask");
var cleanTask = require("./.grunt/cleantask");
var jshintTask = require("./.grunt/jshinttask");
var fileWatchTask = require("./.grunt/filewatcher");
var includeReplaceTask = require("./.grunt/includeReplaceTask");

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: copyTask,
        clean: cleanTask,
        jshint: jshintTask,
        watch: fileWatchTask,
        includereplace: includeReplaceTask

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('nostart',["jshint","clean","copy","includereplace" ]);
    grunt.registerTask('default',["nostart","watch"]);
};

