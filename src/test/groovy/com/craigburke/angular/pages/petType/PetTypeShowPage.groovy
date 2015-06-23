package com.craigburke.angular.pages.petType

import geb.Page

class PetTypeShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show PetType' }

    static content = {
        successMessage { $(".alert-success") }
    }

}