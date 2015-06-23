package com.craigburke.angular.pages.vet

import geb.Module
import geb.Page

class VetListPage extends Page {

    static url = "#/vet/list"

    static at = { $('h2').text() == 'Vet List' }

    static content = {
		specialitiesFilter {$("input[ng-model='ctrl.filter.specialities']")}
		firstNameFilter {$("input[ng-model='ctrl.filter.firstName']")}
		lastNameFilter {$("input[ng-model='ctrl.filter.lastName']")}
	
		specialitiesSort { $("table#list th[property='specialities']") }
		firstNameSort { $("table#list th[property='firstName']") }
		lastNameSort { $("table#list th[property='lastName']") }
    
	    createButton { $("button[crud-button='create']") }
        successMessage { $(".alert-success") }
		
        rows { moduleList VetListRow, $("table#list tbody tr") }
    }

}

class VetListRow extends Module {

	static content = {
		cell { $("td") }
        editButton { $("button[crud-button='edit']") }
        deleteButton { $("button[crud-button='delete']") }
    }

}