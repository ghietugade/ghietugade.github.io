module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['**/*.scss'],
          dest: 'dist/css',
          ext: '.css'
      }]
      }
    },
    // copy: {
    //   images: {
    //     files: [
    //       { 
    //         expand: true,
    //         cwd: 'src/images/', 
    //         src: ['**/*.{png,jpg,svg}'], 
    //         dest:'dist/images/' 
    //       }
    //     ]
    //   }
    // },
    postcss: {
      options: {
        map: false,
        processors: [
        require('autoprefixer')({
          browsers: ['last 2 versions']
        })
        ]
      },
      dist: {
        src: 'dist/css/style.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      build: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.min.js'
      }
    },
    watch: { 
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'cssmin']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
