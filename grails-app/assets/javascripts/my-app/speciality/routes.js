'use strict';

angular.module('myApp.speciality')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/speciality/', '/speciality/list');

	$stateProvider
		.state('speciality', {
			abstract:true,
			url:'/speciality',
			template: '<div ui-view></div>'
		})
		.state('speciality.list', {
			url:'/list',
			controller:'SpecialityListCtrl as ctrl',
			templateUrl:'/my-app/speciality/list.html',
            resolve: {
                specialityList: function($stateParams, SpecialityService) {
                    return SpecialityService.list($stateParams);
                } 
            }
		})
		.state('speciality.create', {
			url:'/create',
			controller:'SpecialityCreateEditCtrl as ctrl',
			templateUrl:'/my-app/speciality/create-edit.html',
            resolve: {
				speciality: function(SpecialityService) {
                	return SpecialityService.create();
            	}
			}
		})
		.state('speciality.edit', {
			url:'/edit/:id',
			controller:'SpecialityCreateEditCtrl as ctrl',
			templateUrl:'/my-app/speciality/create-edit.html',
            resolve: { 
				speciality: function($stateParams, SpecialityService) {
					return SpecialityService.get($stateParams.id);
            	}
			}
		})
		.state('speciality.show', {
			url:'/show/:id',
			controller:'SpecialityShowCtrl as ctrl',
			templateUrl:'/my-app/speciality/show.html',
            resolve: { 
				speciality: function($stateParams, SpecialityService) {
					return SpecialityService.get($stateParams.id);
            	}
			}
		});
});