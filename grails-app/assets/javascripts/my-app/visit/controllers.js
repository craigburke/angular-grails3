'use strict';

function VisitListCtrl($scope, VisitService, visitList, petList, pageSize) {
    var self = this;
    self.visitList = visitList;
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

        VisitService.list(params).then(function(items) {
            self.visitList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function VisitShowCtrl(visit) {
    var self = this;
    self.visit = visit;
};

function VisitCreateEditCtrl(visit, petList ) {
    var self = this;
	self.petList = petList;
    self.visit = visit;
}

angular.module('myApp.visit.controllers', [])
    .controller('VisitListCtrl', VisitListCtrl)
    .controller('VisitShowCtrl', VisitShowCtrl)
    .controller('VisitCreateEditCtrl', VisitCreateEditCtrl);