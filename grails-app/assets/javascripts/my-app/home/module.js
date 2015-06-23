//= require_self 
//= require routes
//= require services
//= require controllers
//= require_tree /my-app/home/templates/

'use strict';

angular.module('myApp.home', [
	'myApp.home.services',
	'myApp.home.controllers'
]);