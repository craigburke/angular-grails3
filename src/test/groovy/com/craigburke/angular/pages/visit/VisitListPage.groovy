package com.craigburke.angular.pages.visit

import geb.Module
import geb.Page

class VisitListPage extends Page {

    static url = "#/visit/list"

    static at = { $('h2').text() == 'Visit List' }

    static content = {
		dateFilter {$("input[ng-model='ctrl.filter.date']")}
		petFilter {$("input[ng-model='ctrl.filter.pet']")}
		descriptionFilter {$("input[ng-model='ctrl.filter.description']")}
	
		dateSort { $("table#list th[property='date']") }
		petSort { $("table#list th[property='pet']") }
		descriptionSort { $("table#list th[property='description']") }
    
	    createButton { $("button[crud-button='create']") }
        successMessage { $(".alert-success") }
		
        rows { moduleList VisitListRow, $("table#list tbody tr") }
    }

}

class VisitListRow extends Module {

	static content = {
		cell { $("td") }
        editButton { $("button[crud-button='edit']") }
        deleteButton { $("button[crud-button='delete']") }
    }

}