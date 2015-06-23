'use strict';

function SpecialityListCtrl($scope, SpecialityService, specialityList, pageSize) {
    var self = this;
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

        SpecialityService.list(params).then(function(items) {
            self.specialityList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function SpecialityShowCtrl(speciality) {
    var self = this;
    self.speciality = speciality;
};

function SpecialityCreateEditCtrl(speciality ) {
    var self = this;
	
    self.speciality = speciality;
}

angular.module('myApp.speciality.controllers', [])
    .controller('SpecialityListCtrl', SpecialityListCtrl)
    .controller('SpecialityShowCtrl', SpecialityShowCtrl)
    .controller('SpecialityCreateEditCtrl', SpecialityCreateEditCtrl);