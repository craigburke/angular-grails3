'use strict';

function SpecialityService(CrudServiceFactory) {
    return CrudServiceFactory('/api/speciality');
}

angular.module('myApp.speciality.services', [])
    .factory('SpecialityService', SpecialityService);
