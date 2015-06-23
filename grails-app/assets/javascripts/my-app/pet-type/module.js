//= require_self 
//= require routes
//= require controllers
//= require services 
//= require_tree /my-app/pet-type/templates/

'use strict';

angular.module('myApp.petType', [
	'myApp.core',
	'myApp.petType.controllers', 
	'myApp.petType.services'
]);