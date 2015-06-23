//= require_self 
//= require routes
//= require controllers
//= require services 
//= require /my-app/pet/services
//= require_tree /my-app/visit/templates/

'use strict';

angular.module('myApp.visit', [
	'myApp.core',
	'myApp.visit.controllers', 
	'myApp.pet.services',
	'myApp.visit.services'
]);