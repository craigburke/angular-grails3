package com.craigburke.angular.pages.speciality

import geb.Module
import geb.Page

class SpecialityListPage extends Page {

    static url = "#/speciality/list"

    static at = { $('h2').text() == 'Speciality List' }

    static content = {
		nameFilter {$("input[ng-model='ctrl.filter.name']")}
	
		nameSort { $("table#list th[property='name']") }
    
	    createButton { $("button[crud-button='create']") }
        successMessage { $(".alert-success") }
		
        rows { moduleList SpecialityListRow, $("table#list tbody tr") }
    }

}

class SpecialityListRow extends Module {

	static content = {
		cell { $("td") }
        editButton { $("button[crud-button='edit']") }
        deleteButton { $("button[crud-button='delete']") }
    }

}