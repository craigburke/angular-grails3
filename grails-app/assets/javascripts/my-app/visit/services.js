'use strict';

function VisitService(CrudServiceFactory) {
    return CrudServiceFactory('/api/visit');
}

angular.module('myApp.visit.services', [])
    .factory('VisitService', VisitService);
