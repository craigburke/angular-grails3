package com.craigburke.angular.pages.vet

import geb.Page

class VetShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show Vet' }

    static content = {
        successMessage { $(".alert-success") }
    }

}