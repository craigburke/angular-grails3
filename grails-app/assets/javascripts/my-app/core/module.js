//= require /angular/angular
//= require_full_tree /angular/modules
//= require /restangular.min
//= require /underscore.min
//= require /angular-ui-router.min
//= require /ui-bootstrap.min
//= require directives/module
//= require services/module
//= require filters

'use strict';

angular.module('myApp.core', [
	'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'myApp.core.directives',
    'myApp.core.services',
    'myApp.core.filters',
    'myApp.core.constants'
]);

angular.module('myApp.core.constants', []);