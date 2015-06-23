'use strict';

function VetListCtrl($scope, VetService, vetList, specialityList, pageSize) {
    var self = this;
    self.vetList = vetList;
	self.specialityList = specialityList;
    self.pageSize = pageSize;
    self.page = 1;
    self.filter = {};

    $scope.$watchCollection(function() { return self.filter }, function() {
        self.reload();
    });

    self.load = function() {
        var params = {page: self.page};

        if (self.sort) {
            angular.extend(params, self.sort);
        }
		if (self.filter) {
			params.filter = self.filter
		}

        VetService.list(params).then(function(items) {
            self.vetList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function VetShowCtrl(vet) {
    var self = this;
    self.vet = vet;
};

function VetCreateEditCtrl(vet, specialityList ) {
    var self = this;
	self.specialityList = specialityList;
    self.vet = vet;
}

angular.module('myApp.vet.controllers', [])
    .controller('VetListCtrl', VetListCtrl)
    .controller('VetShowCtrl', VetShowCtrl)
    .controller('VetCreateEditCtrl', VetCreateEditCtrl);