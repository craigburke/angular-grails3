package com.craigburke.angular.pages.petType

import geb.Module
import geb.Page

class PetTypeListPage extends Page {

    static url = "#/petType/list"

    static at = { $('h2').text() == 'PetType List' }

    static content = {
		nameFilter {$("input[ng-model='ctrl.filter.name']")}
	
		nameSort { $("table#list th[property='name']") }
    
	    createButton { $("button[crud-button='create']") }
        successMessage { $(".alert-success") }
		
        rows { moduleList PetTypeListRow, $("table#list tbody tr") }
    }

}

class PetTypeListRow extends Module {

	static content = {
		cell { $("td") }
        editButton { $("button[crud-button='edit']") }
        deleteButton { $("button[crud-button='delete']") }
    }

}