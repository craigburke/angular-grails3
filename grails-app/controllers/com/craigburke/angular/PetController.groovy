package com.craigburke.angular
import com.craigburke.angular.Pet

class PetController extends PagedRestfulController {
    PetController() {
        super(Pet)
    }
}