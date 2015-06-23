package com.craigburke.angular.pages.petType

import geb.Module
import geb.Page

class PetTypeCreatePage extends Page {

    static url = "#/petType/create"

    static at = { $('h2').text() == 'Create PetType' }

    static content = { 
		nameField {$("input[ng-model='ctrl.petType.name']")}
        saveButton { $('button[crud-button="save"]') }
    }

}