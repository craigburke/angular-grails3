package com.craigburke.angular.pages.speciality

import geb.Module
import geb.Page

class SpecialityCreatePage extends Page {

    static url = "#/speciality/create"

    static at = { $('h2').text() == 'Create Speciality' }

    static content = { 
		nameField {$("input[ng-model='ctrl.speciality.name']")}
        saveButton { $('button[crud-button="save"]') }
    }

}