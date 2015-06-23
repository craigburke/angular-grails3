package com.craigburke.angular.pages.petType

import geb.Module
import geb.Page

class PetTypeEditPage extends Page {

    static at = { $('h2').text() == 'Edit PetType' }

    static content = {
		nameField {$("input[ng-model='ctrl.petType.name']")}
        saveButton { $('button[crud-button="save"]') }
    }

}