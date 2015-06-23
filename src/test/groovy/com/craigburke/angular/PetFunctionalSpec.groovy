package com.craigburke.angular

import com.craigburke.angular.pages.pet.*
import geb.spock.GebReportingSpec
import grails.test.mixin.integration.Integration


@Integration
class PetFunctionalSpec extends GebReportingSpec {

	def "should be able to view list page"() {
		when:
		to PetListPage

		then:
		at PetListPage
	}
	
	def "should be able to create a valid Pet"() {
		when:
		to PetListPage

		and:
		createButton.click()

		then:
		at PetCreatePage

		when:
		birthDateField = "01/01/2001"
		ownerField = ownerField.find('option').value()
		typeField = typeField.find('option').value()
		visitsField = visitsField.find('option').value()
		nameField = "Foo"
			
		and:
		saveButton.click()

		then:
		at PetShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Pet was successfully created"
	}
	
	def "should be able to sort the Pet List"() {
		given:
		to PetListPage

		when:
		birthDateSort.click()
		
		then:
		birthDateSort.classes().contains("asc")

		when:
		ownerSort.click()
		
		then:
		ownerSort.classes().contains("asc")

		when:
		typeSort.click()
		
		then:
		typeSort.classes().contains("asc")

		when:
		visitsSort.click()
		
		then:
		visitsSort.classes().contains("asc")
	
	}
	
	def "should be able to filter the Pet List"() {
		given:
		to PetListPage

		when:
		birthDateFilter = "01/01/2001"
		
		then:
		waitFor { rows.size() > 0 }

		when:
		ownerFilter = ownerFilter.find('option').value()
		
		then:
		waitFor { rows.size() > 0 }

		when:
		typeFilter = typeFilter.find('option').value()
		
		then:
		waitFor { rows.size() > 0 }

		when:
		visitsFilter = visitsFilter.find('option').value()
		
		then:
		waitFor { rows.size() > 0 }
	
	}
	
	def "should be able to edit the first Pet"() {
		when:
		to PetListPage

		and:
		rows.first().editButton.click()

		then:
		at PetEditPage
		
		when:
		birthDateField = "02/01/2001"
		ownerField = ownerField.find('option').value()
		typeField = typeField.find('option').value()
		visitsField = visitsField.find('option').value()
		nameField = "Foo!"
		
		and:
		saveButton.click()
		
		then:
		at PetShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Pet was successfully updated"
	}
	
	def "should be able to delete the first Pet"() {
		when:
		to PetListPage

		and:
		rows.first().deleteButton.click()

		then:
		at PetListPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Pet was successfully deleted"
      }
	
}