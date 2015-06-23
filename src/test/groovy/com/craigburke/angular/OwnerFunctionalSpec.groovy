package com.craigburke.angular

import com.craigburke.angular.pages.owner.*
import geb.spock.GebReportingSpec
import grails.test.mixin.integration.Integration


@Integration
class OwnerFunctionalSpec extends GebReportingSpec {

	def "should be able to view list page"() {
		when:
		to OwnerListPage

		then:
		at OwnerListPage
	}
	
	def "should be able to create a valid Owner"() {
		when:
		to OwnerListPage

		and:
		createButton.click()

		then:
		at OwnerCreatePage

		when:
		firstNameField = "Foo"
		lastNameField = "Foo"
		petsField = petsField.find('option').value()
		addressField = "Foo"
		cityField = "Foo"
		telephoneField = "Foo"
			
		and:
		saveButton.click()

		then:
		at OwnerShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Owner was successfully created"
	}
	
	def "should be able to sort the Owner List"() {
		given:
		to OwnerListPage

		when:
		firstNameSort.click()
		
		then:
		firstNameSort.classes().contains("asc")

		when:
		lastNameSort.click()
		
		then:
		lastNameSort.classes().contains("asc")

		when:
		petsSort.click()
		
		then:
		petsSort.classes().contains("asc")

		when:
		addressSort.click()
		
		then:
		addressSort.classes().contains("asc")
	
	}
	
	def "should be able to filter the Owner List"() {
		given:
		to OwnerListPage

		when:
		firstNameFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }

		when:
		lastNameFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }

		when:
		petsFilter = petsFilter.find('option').value()
		
		then:
		waitFor { rows.size() > 0 }

		when:
		addressFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }
	
	}
	
	def "should be able to edit the first Owner"() {
		when:
		to OwnerListPage

		and:
		rows.first().editButton.click()

		then:
		at OwnerEditPage
		
		when:
		firstNameField = "Foo!"
		lastNameField = "Foo!"
		petsField = petsField.find('option').value()
		addressField = "Foo!"
		cityField = "Foo!"
		telephoneField = "Foo!"
		
		and:
		saveButton.click()
		
		then:
		at OwnerShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Owner was successfully updated"
	}
	
	def "should be able to delete the first Owner"() {
		when:
		to OwnerListPage

		and:
		rows.first().deleteButton.click()

		then:
		at OwnerListPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Owner was successfully deleted"
      }
	
}