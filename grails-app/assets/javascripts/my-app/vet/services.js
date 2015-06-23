'use strict';

function VetService(CrudServiceFactory) {
    return CrudServiceFactory('/api/vet');
}

angular.module('myApp.vet.services', [])
    .factory('VetService', VetService);
