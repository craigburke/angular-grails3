package com.craigburke.angular.pages.pet

import geb.Module
import geb.Page

class PetEditPage extends Page {

    static at = { $('h2').text() == 'Edit Pet' }

    static content = {
		birthDateField {$("input[ng-model='ctrl.pet.birthDate']")}
		ownerField {$("input[ng-model='ctrl.pet.owner']")}
		typeField {$("input[ng-model='ctrl.pet.type']")}
		visitsField {$("input[ng-model='ctrl.pet.visits']")}
		nameField {$("input[ng-model='ctrl.pet.name']")}
        saveButton { $('button[crud-button="save"]') }
    }

}