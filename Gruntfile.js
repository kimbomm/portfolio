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
          'assets/css/recruit.css': 'assets/less/recruit.less',
          'assets/css/club.css': 'assets/less/club.less',
          'assets/css/match.css': 'assets/less/match.less',
          'assets/css/match_view.css': 'assets/less/match_view.less',
          'assets/css/team.css': 'assets/less/team.less',
          'assets/css/team_view.css': 'assets/less/team_view.less',
          'assets/css/news.css': 'assets/less/news.less',
          'assets/css/news_view.css': 'assets/less/news_view.less',
          'assets/css/gellary.css': 'assets/less/gellary.less',
          'assets/css/gellary_view.css': 'assets/less/gellary_view.less'
        }
      },
      development: {
        options: {
          paths: ['assets/less'],
          dumpLineNumbers:"comments"
        },
        files: {
          'assets/css/dev/index.dev.css': 'assets/less/index.less',
          'assets/css/dev/recruit.dev.css': 'assets/less/recruit.less',
          'assets/css/dev/club.dev.css': 'assets/less/club.less',
          'assets/css/dev/match.dev.css': 'assets/less/match.less',
          'assets/css/dev/match_view.dev.css': 'assets/less/match_view.less',
          'assets/css/dev/team.dev.css': 'assets/less/team.less',
          'assets/css/dev/team_view.dev.css': 'assets/less/team_view.less',
          'assets/css/dev/news.dev.css': 'assets/less/news.less',
          'assets/css/dev/news_view.dev.css': 'assets/less/news_view.less',
          'assets/css/dev/gellary.dev.css': 'assets/less/gellary.less',
          'assets/css/dev/gellary_view.dev.css': 'assets/less/gellary_view.less'
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
          'assets/css/min/style.min.css': ['assets/css/*.css']
        }
      }
    },
    includes: {
      build: {
        cwd: 'html',
        src: ['*.html'], // 메인 및 서브 페이지들의 경로
        dest: 'build/', // 완성될 페이지의 경로
        options: {
          flatten: true,
          includePath: 'include' // 메인 및 서브 페이지가 들어있는 페이지
        }
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'photo_/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'assets/photo/'                  // Destination path prefix
        }]
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'js/*.js', 'assets/**/*.js']
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9', 'chrome', 'Firefox', 'Safari', 'Android']
      },
      dist: {
        file: {
          'assets/css/index.css': 'assets/css/index.css',
          'assets/css/recruit.css': 'assets/css/recruit.css',
          'assets/css/club.css': 'assets/css/club.css',
          'assets/css/match.css': 'assets/css/match.css',
          'assets/css/match_view.css': 'assets/css/match_view.css',
          'assets/css/team.css': 'assets/css/team.css',
          'assets/css/team_view.css': 'assets/css/team_view.css',
          'assets/css/news.css': 'assets/css/news.css',
          'assets/css/news_view.css': 'assets/css/news_view.css',
          'assets/css/gellary.css': 'assets/css/gellary.css',
          'assets/css/gellary_view.css': 'assets/css/gellary_view.css'
        }
      }
    },

    watch: {
      less: {
        files: ['assets/less/*.less','assets/**/*.less'],
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
      },
      // jshint:{
      //   files: 'js/*.js',
      //   tasks: ['jshint'],
      //   option: {
      //     spaw:false
      //   }
      // },
      // uglify:{
      //   files: 'js/*.js',
      //   tasks: ['uglify'],
      //   option: {
      //     spaw:false
      //   }
      // },
      include:{
        files: 'html/*.html',
        tasks: ['includes'],
        options: {
          spaw:false
        }
      }
    }

  });

  // 플러그인 로드.
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['serve']);
  grunt.registerTask('dev', 'includes');

};
