//= require_self 
//= require routes
//= require controllers
//= require services 
//= require_tree /my-app/speciality/templates/

'use strict';

angular.module('myApp.speciality', [
	'myApp.core',
	'myApp.speciality.controllers', 
	'myApp.speciality.services'
]);