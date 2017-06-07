module.exports = function(grunt) {

  // 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve:{
      options:{
        port:9000
      }
    },

    less: {
      product: {
        options: {
          paths: ['assets/less']
        },
        files: {
          'assets/css/index.css': 'assets/less/index.less'
        }
      },
      development: {
        options: {
          paths: ['assets/less'],
          dumpLineNumbers:"comments"
        },
        files: {
          'assets/css/index.dev.css': 'assets/less/index.less'
        }
      }
    },


    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/css/output.css': ['assets/css/index.css']
        }
      }
    },

    watch: {
      less: {
        files: 'assets/less/*.less',
        tasks: ['less'],
        options: {
          spaw:false
        }
      },
      cssmin:{
        files: 'assets/css/index.css',
        tasks: ['cssmin'],
        options: {
          spaw:false
        }
      }
    }


  });

  // 플러그인 로드.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
