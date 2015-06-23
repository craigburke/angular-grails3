//= require_self 
//= require routes
//= require controllers
//= require services 
//= require /my-app/owner/services

//= require /my-app/pet-type/services

//= require /my-app/visit/services
//= require_tree /my-app/pet/templates/

'use strict';

angular.module('myApp.pet', [
	'myApp.core',
	'myApp.pet.controllers', 
	'myApp.owner.services',
	'myApp.petType.services',
	'myApp.visit.services',
	'myApp.pet.services'
]);