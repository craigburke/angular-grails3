'use strict';

function PetTypeListCtrl($scope, PetTypeService, petTypeList, pageSize) {
    var self = this;
    self.petTypeList = petTypeList;
	
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

        PetTypeService.list(params).then(function(items) {
            self.petTypeList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function PetTypeShowCtrl(petType) {
    var self = this;
    self.petType = petType;
};

function PetTypeCreateEditCtrl(petType ) {
    var self = this;
	
    self.petType = petType;
}

angular.module('myApp.petType.controllers', [])
    .controller('PetTypeListCtrl', PetTypeListCtrl)
    .controller('PetTypeShowCtrl', PetTypeShowCtrl)
    .controller('PetTypeCreateEditCtrl', PetTypeCreateEditCtrl);