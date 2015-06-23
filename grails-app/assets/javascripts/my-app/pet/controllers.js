'use strict';

function PetListCtrl($scope, PetService, petList, ownerList, petTypeList, visitList, pageSize) {
    var self = this;
    self.petList = petList;
	self.ownerList = ownerList;
self.petTypeList = petTypeList;
self.visitList = visitList;
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

        PetService.list(params).then(function(items) {
            self.petList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function PetShowCtrl(pet) {
    var self = this;
    self.pet = pet;
};

function PetCreateEditCtrl(pet, ownerList, petTypeList, visitList ) {
    var self = this;
	self.ownerList = ownerList;
self.petTypeList = petTypeList;
self.visitList = visitList;
    self.pet = pet;
}

angular.module('myApp.pet.controllers', [])
    .controller('PetListCtrl', PetListCtrl)
    .controller('PetShowCtrl', PetShowCtrl)
    .controller('PetCreateEditCtrl', PetCreateEditCtrl);