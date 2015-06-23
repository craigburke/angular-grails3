'use strict';

function HomeCtrl(info) {
    var self = this;
    self.info = info;
}

angular.module('myApp.home.controllers', [])
	.controller('HomeCtrl', HomeCtrl);