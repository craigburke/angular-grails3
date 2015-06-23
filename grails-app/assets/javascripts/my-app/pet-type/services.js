'use strict';

function PetTypeService(CrudServiceFactory) {
    return CrudServiceFactory('/api/petType');
}

angular.module('myApp.petType.services', [])
    .factory('PetTypeService', PetTypeService);
