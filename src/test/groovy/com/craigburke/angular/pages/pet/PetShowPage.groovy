package com.craigburke.angular.pages.pet

import geb.Page

class PetShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show Pet' }

    static content = {
        successMessage { $(".alert-success") }
    }

}