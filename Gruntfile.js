'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
             all: [ 'js/*.js', 'js/**/*.js' ]
        },
        concat: {
            dist: {
                src: [ 'js/*.js'],
                dest: 'dist/bootstrap-simple-file-input.min.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/app.js': [ 'dist/bootstrap-simple-file-input.min.js' ]
                },
                options: {
                    mangle: false
                }
            }
        },
        clean: {
            temp: {
                src: [ 'tmp' ]
            }
        }
    });
    
    // Loading of tasks and registering tasks will be written here
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
    grunt.registerTask('package', [
        'jshint', 'concat:dist', 'uglify:dist', 'clean:temp']);

};