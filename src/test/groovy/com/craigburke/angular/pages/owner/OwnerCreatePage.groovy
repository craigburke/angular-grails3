package com.craigburke.angular.pages.owner

import geb.Module
import geb.Page

class OwnerCreatePage extends Page {

    static url = "#/owner/create"

    static at = { $('h2').text() == 'Create Owner' }

    static content = { 
		firstNameField {$("input[ng-model='ctrl.owner.firstName']")}
		lastNameField {$("input[ng-model='ctrl.owner.lastName']")}
		petsField {$("input[ng-model='ctrl.owner.pets']")}
		addressField {$("input[ng-model='ctrl.owner.address']")}
		cityField {$("input[ng-model='ctrl.owner.city']")}
		telephoneField {$("input[ng-model='ctrl.owner.telephone']")}
        saveButton { $('button[crud-button="save"]') }
    }

}