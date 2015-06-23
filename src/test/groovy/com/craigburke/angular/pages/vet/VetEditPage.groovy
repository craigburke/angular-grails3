package com.craigburke.angular.pages.vet

import geb.Module
import geb.Page

class VetEditPage extends Page {

    static at = { $('h2').text() == 'Edit Vet' }

    static content = {
		specialitiesField {$("input[ng-model='ctrl.vet.specialities']")}
		firstNameField {$("input[ng-model='ctrl.vet.firstName']")}
		lastNameField {$("input[ng-model='ctrl.vet.lastName']")}
        saveButton { $('button[crud-button="save"]') }
    }

}