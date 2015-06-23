package com.craigburke.angular.pages.visit

import geb.Page

class VisitShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show Visit' }

    static content = {
        successMessage { $(".alert-success") }
    }

}