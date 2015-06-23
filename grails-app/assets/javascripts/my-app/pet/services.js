'use strict';

function PetService(CrudServiceFactory) {
    return CrudServiceFactory('/api/pet');
}

angular.module('myApp.pet.services', [])
    .factory('PetService', PetService);
