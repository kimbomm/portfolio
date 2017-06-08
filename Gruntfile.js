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
          'assets/css/index.css': 'assets/less/index.less',
          'assets/css/recruit.css': 'assets/less/recruit.less'
        }
      },
      development: {
        options: {
          paths: ['assets/less'],
          dumpLineNumbers:"comments"
        },
        files: {
          'assets/css/index.dev.css': 'assets/less/index.less',
          'assets/css/recruit.dev.css': 'assets/less/recruit.less'
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
    includes: {
      files: {
        cwd: 'html',
        src: ['*.html'], // 메인 및 서브 페이지들의 경로
        dest: 'html/bulid', // 완성될 페이지의 경로
        flatten: true,
         // include 파일이 존재할 경로
        options: {
          silent: true,
          includesPath: 'include/', // 메인 및 서브 페이지가 들어있는 페이지
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
      // includes:{
      //   files: 'html/*.html',
      //   tasks: ['includes'],
      //   options: {
      //     spaw:false
      //   }
      // }
    }

  });

  // 플러그인 로드.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['serve']);
  grunt.registerTask('dev', 'includes');

};
