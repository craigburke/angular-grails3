'use strict';

angular.module('myApp.vet')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/vet/', '/vet/list');

	$stateProvider
		.state('vet', {
			abstract:true,
			url:'/vet',
			template: '<div ui-view></div>'
		})
		.state('vet.list', {
			url:'/list',
			controller:'VetListCtrl as ctrl',
			templateUrl:'/my-app/vet/list.html',
            resolve: {
                vetList: function($stateParams, VetService) {
                    return VetService.list($stateParams);
                },
				specialityList: function(SpecialityService) {
					return SpecialityService.list();
				}	
 
            }
		})
		.state('vet.create', {
			url:'/create',
			controller:'VetCreateEditCtrl as ctrl',
			templateUrl:'/my-app/vet/create-edit.html',
            resolve: {
				vet: function(VetService) {
                	return VetService.create();
            	},
				specialityList: function(SpecialityService) {
					return SpecialityService.list();
				}	

			}
		})
		.state('vet.edit', {
			url:'/edit/:id',
			controller:'VetCreateEditCtrl as ctrl',
			templateUrl:'/my-app/vet/create-edit.html',
            resolve: { 
				vet: function($stateParams, VetService) {
					return VetService.get($stateParams.id);
            	},
				specialityList: function(SpecialityService) {
					return SpecialityService.list();
				}	

			}
		})
		.state('vet.show', {
			url:'/show/:id',
			controller:'VetShowCtrl as ctrl',
			templateUrl:'/my-app/vet/show.html',
            resolve: { 
				vet: function($stateParams, VetService) {
					return VetService.get($stateParams.id);
            	},
				specialityList: function(SpecialityService) {
					return SpecialityService.list();
				}	

			}
		});
});