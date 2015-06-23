'use strict';

function OwnerService(CrudServiceFactory) {
    return CrudServiceFactory('/api/owner');
}

angular.module('myApp.owner.services', [])
    .factory('OwnerService', OwnerService);
