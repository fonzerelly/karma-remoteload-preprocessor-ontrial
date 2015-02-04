// Karma configuration
// Generated on Sat Dec 13 2014 23:41:10 GMT+0100 (Mitteleuropäische Zeit)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine-jquery', 'jquery-1.8.3', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/karma-jasmine-jquery/lib/jasmine-jquery.js',
      'lib/*.js',
      'src/*.js',
      'test/*.js',
      'fixtures/**/*.html',
    ],

    plugins: [
      'karma-jquery',
      'karma-jasmine',
      'karma-jasmine-jquery',
      //'karma-jasmine-jquery-preload',
      'karma-remoteload-preprocessor',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-html2js-preprocessor'
      ],


    // list of files to exclude
    exclude: [
      '**/*.spw',
      '**/*.swp',
      '**/*.*~'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
       './test/jquery.borderize.spec.js': 'remoteload',
       './**/*.html': ['html2js'],
      './fixtures/**/*.html': 'html2js'
    },

    remoteloadPreprocessor: {
      patterns: [
        {
          regex: /loadFixtures\(\"(.*)\"\);/g,
          groupIndex: 1,
          substitute: "setFixtures(window.__html__['%RESOURCE%']);"
          // DEBUG-VERSION
          // substitute: "(function(resource) {console.log(resource); console.log(window.__html__[resource]);setFixtures(window.__html__[resource]);}(\"%RESOURCE%\"))"
        }
      ],
      dir: "fixtures/"
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,

    proxies: {
      //'/loc': 'http://localhost:8080'
    },


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
    //  'Firefox' ,
      'Chrome',
     // 'PhantomJS'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
