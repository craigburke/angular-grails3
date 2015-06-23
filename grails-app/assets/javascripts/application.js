//= require my-app/core/module
//= require my-app/owner/module
//= require my-app/pet/module
//= require my-app/pet-type/module
//= require my-app/speciality/module
//= require my-app/vet/module
//= require my-app/visit/module
//= require my-app/home/module

'use strict';

angular.module('myApp', [
	'myApp.owner',
	'myApp.pet',
	'myApp.petType',
	'myApp.speciality',
	'myApp.vet',
	'myApp.visit',
	'myApp.core',
	'myApp.home'
]);