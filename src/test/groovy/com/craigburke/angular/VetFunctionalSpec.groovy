package com.craigburke.angular

import com.craigburke.angular.pages.vet.*
import geb.spock.GebReportingSpec
import grails.test.mixin.integration.Integration


@Integration
class VetFunctionalSpec extends GebReportingSpec {

	def "should be able to view list page"() {
		when:
		to VetListPage

		then:
		at VetListPage
	}
	
	def "should be able to create a valid Vet"() {
		when:
		to VetListPage

		and:
		createButton.click()

		then:
		at VetCreatePage

		when:
		specialitiesField = specialitiesField.find('option').value()
		firstNameField = "Foo"
		lastNameField = "Foo"
			
		and:
		saveButton.click()

		then:
		at VetShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Vet was successfully created"
	}
	
	def "should be able to sort the Vet List"() {
		given:
		to VetListPage

		when:
		specialitiesSort.click()
		
		then:
		specialitiesSort.classes().contains("asc")

		when:
		firstNameSort.click()
		
		then:
		firstNameSort.classes().contains("asc")

		when:
		lastNameSort.click()
		
		then:
		lastNameSort.classes().contains("asc")
	
	}
	
	def "should be able to filter the Vet List"() {
		given:
		to VetListPage

		when:
		specialitiesFilter = specialitiesFilter.find('option').value()
		
		then:
		waitFor { rows.size() > 0 }

		when:
		firstNameFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }

		when:
		lastNameFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }
	
	}
	
	def "should be able to edit the first Vet"() {
		when:
		to VetListPage

		and:
		rows.first().editButton.click()

		then:
		at VetEditPage
		
		when:
		specialitiesField = specialitiesField.find('option').value()
		firstNameField = "Foo!"
		lastNameField = "Foo!"
		
		and:
		saveButton.click()
		
		then:
		at VetShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Vet was successfully updated"
	}
	
	def "should be able to delete the first Vet"() {
		when:
		to VetListPage

		and:
		rows.first().deleteButton.click()

		then:
		at VetListPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Vet was successfully deleted"
      }
	
}