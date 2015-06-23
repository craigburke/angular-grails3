'use strict';

angular.module('myApp.home')
.config(function($stateProvider) {
	$stateProvider
		.state('home', {
			url:'',
			templateUrl:'/my-app/home/index.html',
			controller: 'HomeCtrl as ctrl',
			resolve: {
				info: function(HomeService) {
					return HomeService.getInfo();
				}
			}
		});
});