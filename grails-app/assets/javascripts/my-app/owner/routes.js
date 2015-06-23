'use strict';

angular.module('myApp.owner')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/owner/', '/owner/list');

	$stateProvider
		.state('owner', {
			abstract:true,
			url:'/owner',
			template: '<div ui-view></div>'
		})
		.state('owner.list', {
			url:'/list',
			controller:'OwnerListCtrl as ctrl',
			templateUrl:'/my-app/owner/list.html',
            resolve: {
                ownerList: function($stateParams, OwnerService) {
                    return OwnerService.list($stateParams);
                },
				petList: function(PetService) {
					return PetService.list();
				}	
 
            }
		})
		.state('owner.create', {
			url:'/create',
			controller:'OwnerCreateEditCtrl as ctrl',
			templateUrl:'/my-app/owner/create-edit.html',
            resolve: {
				owner: function(OwnerService) {
                	return OwnerService.create();
            	},
				petList: function(PetService) {
					return PetService.list();
				}	

			}
		})
		.state('owner.edit', {
			url:'/edit/:id',
			controller:'OwnerCreateEditCtrl as ctrl',
			templateUrl:'/my-app/owner/create-edit.html',
            resolve: { 
				owner: function($stateParams, OwnerService) {
					return OwnerService.get($stateParams.id);
            	},
				petList: function(PetService) {
					return PetService.list();
				}	

			}
		})
		.state('owner.show', {
			url:'/show/:id',
			controller:'OwnerShowCtrl as ctrl',
			templateUrl:'/my-app/owner/show.html',
            resolve: { 
				owner: function($stateParams, OwnerService) {
					return OwnerService.get($stateParams.id);
            	},
				petList: function(PetService) {
					return PetService.list();
				}	

			}
		});
});