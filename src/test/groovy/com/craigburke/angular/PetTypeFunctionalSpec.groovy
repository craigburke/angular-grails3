package com.craigburke.angular

import com.craigburke.angular.pages.petType.*
import geb.spock.GebReportingSpec
import grails.test.mixin.integration.Integration


@Integration
class PetTypeFunctionalSpec extends GebReportingSpec {

	def "should be able to view list page"() {
		when:
		to PetTypeListPage

		then:
		at PetTypeListPage
	}
	
	def "should be able to create a valid PetType"() {
		when:
		to PetTypeListPage

		and:
		createButton.click()

		then:
		at PetTypeCreatePage

		when:
		nameField = "Foo"
			
		and:
		saveButton.click()

		then:
		at PetTypeShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "PetType was successfully created"
	}
	
	def "should be able to sort the PetType List"() {
		given:
		to PetTypeListPage

		when:
		nameSort.click()
		
		then:
		nameSort.classes().contains("asc")
	
	}
	
	def "should be able to filter the PetType List"() {
		given:
		to PetTypeListPage

		when:
		nameFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }
	
	}
	
	def "should be able to edit the first PetType"() {
		when:
		to PetTypeListPage

		and:
		rows.first().editButton.click()

		then:
		at PetTypeEditPage
		
		when:
		nameField = "Foo!"
		
		and:
		saveButton.click()
		
		then:
		at PetTypeShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "PetType was successfully updated"
	}
	
	def "should be able to delete the first PetType"() {
		when:
		to PetTypeListPage

		and:
		rows.first().deleteButton.click()

		then:
		at PetTypeListPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "PetType was successfully deleted"
      }
	
}