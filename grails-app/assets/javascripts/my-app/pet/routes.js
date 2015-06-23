'use strict';

angular.module('myApp.pet')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/pet/', '/pet/list');

	$stateProvider
		.state('pet', {
			abstract:true,
			url:'/pet',
			template: '<div ui-view></div>'
		})
		.state('pet.list', {
			url:'/list',
			controller:'PetListCtrl as ctrl',
			templateUrl:'/my-app/pet/list.html',
            resolve: {
                petList: function($stateParams, PetService) {
                    return PetService.list($stateParams);
                },
				ownerList: function(OwnerService) {
					return OwnerService.list();
				}	
, 
				petTypeList: function(PetTypeService) {
					return PetTypeService.list();
				}	
, 
				visitList: function(VisitService) {
					return VisitService.list();
				}	
 
            }
		})
		.state('pet.create', {
			url:'/create',
			controller:'PetCreateEditCtrl as ctrl',
			templateUrl:'/my-app/pet/create-edit.html',
            resolve: {
				pet: function(PetService) {
                	return PetService.create();
            	},
				ownerList: function(OwnerService) {
					return OwnerService.list();
				}	
, 
				petTypeList: function(PetTypeService) {
					return PetTypeService.list();
				}	
, 
				visitList: function(VisitService) {
					return VisitService.list();
				}	

			}
		})
		.state('pet.edit', {
			url:'/edit/:id',
			controller:'PetCreateEditCtrl as ctrl',
			templateUrl:'/my-app/pet/create-edit.html',
            resolve: { 
				pet: function($stateParams, PetService) {
					return PetService.get($stateParams.id);
            	},
				ownerList: function(OwnerService) {
					return OwnerService.list();
				}	
, 
				petTypeList: function(PetTypeService) {
					return PetTypeService.list();
				}	
, 
				visitList: function(VisitService) {
					return VisitService.list();
				}	

			}
		})
		.state('pet.show', {
			url:'/show/:id',
			controller:'PetShowCtrl as ctrl',
			templateUrl:'/my-app/pet/show.html',
            resolve: { 
				pet: function($stateParams, PetService) {
					return PetService.get($stateParams.id);
            	},
				ownerList: function(OwnerService) {
					return OwnerService.list();
				}	
, 
				petTypeList: function(PetTypeService) {
					return PetTypeService.list();
				}	
, 
				visitList: function(VisitService) {
					return VisitService.list();
				}	

			}
		});
});