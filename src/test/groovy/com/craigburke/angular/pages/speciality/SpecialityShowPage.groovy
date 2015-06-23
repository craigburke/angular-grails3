package com.craigburke.angular.pages.speciality

import geb.Page

class SpecialityShowPage extends Page {

    static at = { $('h2').text().startsWith 'Show Speciality' }

    static content = {
        successMessage { $(".alert-success") }
    }

}