package com.craigburke.angular

import com.craigburke.angular.pages.visit.*
import geb.spock.GebReportingSpec
import grails.test.mixin.integration.Integration


@Integration
class VisitFunctionalSpec extends GebReportingSpec {

	def "should be able to view list page"() {
		when:
		to VisitListPage

		then:
		at VisitListPage
	}
	
	def "should be able to create a valid Visit"() {
		when:
		to VisitListPage

		and:
		createButton.click()

		then:
		at VisitCreatePage

		when:
		dateField = "01/01/2001"
		petField = petField.find('option').value()
		descriptionField = "Foo"
			
		and:
		saveButton.click()

		then:
		at VisitShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Visit was successfully created"
	}
	
	def "should be able to sort the Visit List"() {
		given:
		to VisitListPage

		when:
		dateSort.click()
		
		then:
		dateSort.classes().contains("asc")

		when:
		petSort.click()
		
		then:
		petSort.classes().contains("asc")

		when:
		descriptionSort.click()
		
		then:
		descriptionSort.classes().contains("asc")
	
	}
	
	def "should be able to filter the Visit List"() {
		given:
		to VisitListPage

		when:
		dateFilter = "01/01/2001"
		
		then:
		waitFor { rows.size() > 0 }

		when:
		petFilter = petFilter.find('option').value()
		
		then:
		waitFor { rows.size() > 0 }

		when:
		descriptionFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }
	
	}
	
	def "should be able to edit the first Visit"() {
		when:
		to VisitListPage

		and:
		rows.first().editButton.click()

		then:
		at VisitEditPage
		
		when:
		dateField = "02/01/2001"
		petField = petField.find('option').value()
		descriptionField = "Foo!"
		
		and:
		saveButton.click()
		
		then:
		at VisitShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Visit was successfully updated"
	}
	
	def "should be able to delete the first Visit"() {
		when:
		to VisitListPage

		and:
		rows.first().deleteButton.click()

		then:
		at VisitListPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Visit was successfully deleted"
      }
	
}