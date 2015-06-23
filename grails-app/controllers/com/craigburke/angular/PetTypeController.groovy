package com.craigburke.angular
import com.craigburke.angular.PetType

class PetTypeController extends PagedRestfulController {
    PetTypeController() {
        super(PetType)
    }
}