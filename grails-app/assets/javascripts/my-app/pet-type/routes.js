'use strict';

angular.module('myApp.petType')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/petType/', '/petType/list');

	$stateProvider
		.state('petType', {
			abstract:true,
			url:'/petType',
			template: '<div ui-view></div>'
		})
		.state('petType.list', {
			url:'/list',
			controller:'PetTypeListCtrl as ctrl',
			templateUrl:'/my-app/pet-type/list.html',
            resolve: {
                petTypeList: function($stateParams, PetTypeService) {
                    return PetTypeService.list($stateParams);
                } 
            }
		})
		.state('petType.create', {
			url:'/create',
			controller:'PetTypeCreateEditCtrl as ctrl',
			templateUrl:'/my-app/pet-type/create-edit.html',
            resolve: {
				petType: function(PetTypeService) {
                	return PetTypeService.create();
            	}
			}
		})
		.state('petType.edit', {
			url:'/edit/:id',
			controller:'PetTypeCreateEditCtrl as ctrl',
			templateUrl:'/my-app/pet-type/create-edit.html',
            resolve: { 
				petType: function($stateParams, PetTypeService) {
					return PetTypeService.get($stateParams.id);
            	}
			}
		})
		.state('petType.show', {
			url:'/show/:id',
			controller:'PetTypeShowCtrl as ctrl',
			templateUrl:'/my-app/pet-type/show.html',
            resolve: { 
				petType: function($stateParams, PetTypeService) {
					return PetTypeService.get($stateParams.id);
            	}
			}
		});
});