// Karma configuration
// Generated on Thu Dec 04 2014 10:10:47 GMT+0100 (CET)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '../',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai', 'chai-as-promised'],

		// list of files / patterns to load in the browser
		files: [
			// Application
			'../build/client/lib/angular/angular.js',
			'../build/client/lib/angular-route/angular-route.js',
			'../build/client/js/x-main.min.js',
			'../build/client/js/xpsui.min.js',
			'../build/client/lib/angular-cookies/angular-cookies.js',
			'../build/client/lib/angular-re-captcha/angular-re-captcha.js',
			'../build/client/lib/angular-translate/angular-translate.js',
			'../build/client/lib/angular-translate-handler-log/angular-translate-handler-log.min.js',
			'../build/client/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
			'../build/client/lib/ace-builds/src-min-noconflict/ace.js',
			'../build/client/lib/angular-ui-ace/ui-ace.js',
			'../build/client/js/safeUrlEncoder.js',
			'../build/client/lib/ngstorage/ngStorage.min.js',
			'../build/client/lib/node-uuid/uuid.js',

			// Mock
			'../build/client/lib/angular-mocks/angular-mocks.js',

			// Tests
			'unit/client/**/*.spec.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true
	});
};
