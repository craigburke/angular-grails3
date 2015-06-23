package com.craigburke.angular.pages.pet

import geb.Module
import geb.Page

class PetListPage extends Page {

    static url = "#/pet/list"

    static at = { $('h2').text() == 'Pet List' }

    static content = {
		birthDateFilter {$("input[ng-model='ctrl.filter.birthDate']")}
		ownerFilter {$("input[ng-model='ctrl.filter.owner']")}
		typeFilter {$("input[ng-model='ctrl.filter.type']")}
		visitsFilter {$("input[ng-model='ctrl.filter.visits']")}
		nameFilter {$("input[ng-model='ctrl.filter.name']")}
	
		birthDateSort { $("table#list th[property='birthDate']") }
		ownerSort { $("table#list th[property='owner']") }
		typeSort { $("table#list th[property='type']") }
		visitsSort { $("table#list th[property='visits']") }
    
	    createButton { $("button[crud-button='create']") }
        successMessage { $(".alert-success") }
		
        rows { moduleList PetListRow, $("table#list tbody tr") }
    }

}

class PetListRow extends Module {

	static content = {
		cell { $("td") }
        editButton { $("button[crud-button='edit']") }
        deleteButton { $("button[crud-button='delete']") }
    }

}