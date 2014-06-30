module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      /*angular: {
        files: {
          'public/js/angular/angular.js': ['bower_components/angular/angular.js']
        }
      },
      angular_mocks: {
        files: {
          'public/js/angular/angular-mocks.js': ['bower_components/angular-mocks/angular-mocks.js']
        }
      },
      angular_route: {
        files: {
          'public/js/angular/angular-route.js': ['bower_components/angular-route/angular-route.js']
        }
      },
      angular_resource: {
        files: {
          'public/js/angular/angular-resource.js': ['bower_components/angular-resource/angular-resource.js']
        }
      },*/
      jquery: {
        files: {
          'public/js/jquery/jquery.js': ['bower_components/jquery/dist/jquery.js']
        }
      },
      foundation_js: {
        files: {
          'public/js/foundation/foundation.js': ['bower_components/foundation/js/foundation.js']
        }
      },
      modernizr: {
        files: {
          'public/js/modernizr/modernizr.js': ['bower_components/modernizr/modernizr.js']
        }
      },
      /*chosen: {
        files: {
          'public/js/chosen/chosen.jquery.js': ['bower_components/chosen_v1.1.0/chosen.jquery.js']
        }
      }*/
    },
    cssmin: {
      combine: {
        files: {
          'public/css/ksio.min.css': ['public/stylesheets/*.css']
        }
      }
    },
    copy: {
      main: {
        options: {
          mangle: false
        },
        files: [
          { expand: true, flatten: true, src: ['bower_components/foundation/css/**'], dest: 'public/css/', filter: 'isFile' },
          //{ expand: true, flatten: true, src: ['bower_components/chosen_v1.1.0/chosen.css','bower_components/chosen_v1.1.0/chosen-sprite.png','bower_components/chosen_v1.1.0/chosen-sprite@2x.png'], dest: 'public/css/', filter: 'isFile' }
        ]
      }
    },
    uglify: {
      app_js: {
        files: {
          'public/js/app.min.js': ['public/javascripts/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('bower', ['concat']);
  grunt.registerTask('cp', ['copy']);
  grunt.registerTask('default', ['cssmin']);

};