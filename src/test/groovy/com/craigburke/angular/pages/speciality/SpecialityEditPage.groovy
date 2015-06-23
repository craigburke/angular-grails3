package com.craigburke.angular.pages.speciality

import geb.Module
import geb.Page

class SpecialityEditPage extends Page {

    static at = { $('h2').text() == 'Edit Speciality' }

    static content = {
		nameField {$("input[ng-model='ctrl.speciality.name']")}
        saveButton { $('button[crud-button="save"]') }
    }

}