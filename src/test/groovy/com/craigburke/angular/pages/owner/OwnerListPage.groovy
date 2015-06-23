package com.craigburke.angular.pages.owner

import geb.Module
import geb.Page

class OwnerListPage extends Page {

    static url = "#/owner/list"

    static at = { $('h2').text() == 'Owner List' }

    static content = {
		firstNameFilter {$("input[ng-model='ctrl.filter.firstName']")}
		lastNameFilter {$("input[ng-model='ctrl.filter.lastName']")}
		petsFilter {$("input[ng-model='ctrl.filter.pets']")}
		addressFilter {$("input[ng-model='ctrl.filter.address']")}
		cityFilter {$("input[ng-model='ctrl.filter.city']")}
		telephoneFilter {$("input[ng-model='ctrl.filter.telephone']")}
	
		firstNameSort { $("table#list th[property='firstName']") }
		lastNameSort { $("table#list th[property='lastName']") }
		petsSort { $("table#list th[property='pets']") }
		addressSort { $("table#list th[property='address']") }
    
	    createButton { $("button[crud-button='create']") }
        successMessage { $(".alert-success") }
		
        rows { moduleList OwnerListRow, $("table#list tbody tr") }
    }

}

class OwnerListRow extends Module {

	static content = {
		cell { $("td") }
        editButton { $("button[crud-button='edit']") }
        deleteButton { $("button[crud-button='delete']") }
    }

}