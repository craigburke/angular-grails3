'use strict';

function OwnerListCtrl($scope, OwnerService, ownerList, petList, pageSize) {
    var self = this;
    self.ownerList = ownerList;
	self.petList = petList;
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

        OwnerService.list(params).then(function(items) {
            self.ownerList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function OwnerShowCtrl(owner) {
    var self = this;
    self.owner = owner;
};

function OwnerCreateEditCtrl(owner, petList ) {
    var self = this;
	self.petList = petList;
    self.owner = owner;
}

angular.module('myApp.owner.controllers', [])
    .controller('OwnerListCtrl', OwnerListCtrl)
    .controller('OwnerShowCtrl', OwnerShowCtrl)
    .controller('OwnerCreateEditCtrl', OwnerCreateEditCtrl);