'use strict';

angular.module('myApp.visit')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/visit/', '/visit/list');

	$stateProvider
		.state('visit', {
			abstract:true,
			url:'/visit',
			template: '<div ui-view></div>'
		})
		.state('visit.list', {
			url:'/list',
			controller:'VisitListCtrl as ctrl',
			templateUrl:'/my-app/visit/list.html',
            resolve: {
                visitList: function($stateParams, VisitService) {
                    return VisitService.list($stateParams);
                },
				petList: function(PetService) {
					return PetService.list();
				}	
 
            }
		})
		.state('visit.create', {
			url:'/create',
			controller:'VisitCreateEditCtrl as ctrl',
			templateUrl:'/my-app/visit/create-edit.html',
            resolve: {
				visit: function(VisitService) {
                	return VisitService.create();
            	},
				petList: function(PetService) {
					return PetService.list();
				}	

			}
		})
		.state('visit.edit', {
			url:'/edit/:id',
			controller:'VisitCreateEditCtrl as ctrl',
			templateUrl:'/my-app/visit/create-edit.html',
            resolve: { 
				visit: function($stateParams, VisitService) {
					return VisitService.get($stateParams.id);
            	},
				petList: function(PetService) {
					return PetService.list();
				}	

			}
		})
		.state('visit.show', {
			url:'/show/:id',
			controller:'VisitShowCtrl as ctrl',
			templateUrl:'/my-app/visit/show.html',
            resolve: { 
				visit: function($stateParams, VisitService) {
					return VisitService.get($stateParams.id);
            	},
				petList: function(PetService) {
					return PetService.list();
				}	

			}
		});
});