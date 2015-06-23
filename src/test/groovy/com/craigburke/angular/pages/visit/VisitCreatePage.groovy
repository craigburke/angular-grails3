package com.craigburke.angular.pages.visit

import geb.Module
import geb.Page

class VisitCreatePage extends Page {

    static url = "#/visit/create"

    static at = { $('h2').text() == 'Create Visit' }

    static content = { 
		dateField {$("input[ng-model='ctrl.visit.date']")}
		petField {$("input[ng-model='ctrl.visit.pet']")}
		descriptionField {$("input[ng-model='ctrl.visit.description']")}
        saveButton { $('button[crud-button="save"]') }
    }

}