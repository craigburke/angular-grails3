package com.craigburke.angular.pages.owner

import geb.Page

class OwnerShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show Owner' }

    static content = {
        successMessage { $(".alert-success") }
    }

}