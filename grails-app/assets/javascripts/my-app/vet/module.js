//= require_self 
//= require routes
//= require controllers
//= require services 
//= require /my-app/speciality/services
//= require_tree /my-app/vet/templates/

'use strict';

angular.module('myApp.vet', [
	'myApp.core',
	'myApp.vet.controllers', 
	'myApp.speciality.services',
	'myApp.vet.services'
]);