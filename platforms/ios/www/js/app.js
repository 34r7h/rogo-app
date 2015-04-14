// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'adolfServices', 'adolfControllers', 'firebase', 'ngTouch', 'admobModule'])

	.run(function($ionicPlatform, admobSvc) {
		admobSvc.createBannerView();
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}

		});
	})

	.config(function($stateProvider, $urlRouterProvider, admobSvcProvider) {

		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

			.state('page10', {
				url: '/',
				templateUrl: 'page10.html'
			})
		;

		// if none of the above states are matched, use this as the fallback

		$urlRouterProvider.otherwise('/');

		admobSvcProvider.setOptions({
			publisherId:          "ca-app-pub-8440343014846849/3119840614",  // Required
			interstitialAdId:     "ca-app-pub-8440343014846849/4596573817",  // Optional
			tappxIdiOs:           "/120940746/Pub-2702-iOS-8226",            // Optional
			tappxIdAndroid:       "/120940746/Pub-2700-Android-8171",        // Optional
			tappxShare:           0.5                                        // Optional
		});

	});