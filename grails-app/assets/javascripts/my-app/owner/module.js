//= require_self 
//= require routes
//= require controllers
//= require services 
//= require /my-app/pet/services
//= require_tree /my-app/owner/templates/

'use strict';

angular.module('myApp.owner', [
	'myApp.core',
	'myApp.owner.controllers', 
	'myApp.pet.services',
	'myApp.owner.services'
]);