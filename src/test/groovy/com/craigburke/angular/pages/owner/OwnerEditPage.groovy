package com.craigburke.angular.pages.owner

import geb.Module
import geb.Page

class OwnerEditPage extends Page {

    static at = { $('h2').text() == 'Edit Owner' }

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