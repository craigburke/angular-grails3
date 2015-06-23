package com.craigburke.angular

import com.craigburke.angular.pages.speciality.*
import geb.spock.GebReportingSpec
import grails.test.mixin.integration.Integration


@Integration
class SpecialityFunctionalSpec extends GebReportingSpec {

	def "should be able to view list page"() {
		when:
		to SpecialityListPage

		then:
		at SpecialityListPage
	}
	
	def "should be able to create a valid Speciality"() {
		when:
		to SpecialityListPage

		and:
		createButton.click()

		then:
		at SpecialityCreatePage

		when:
		nameField = "Foo"
			
		and:
		saveButton.click()

		then:
		at SpecialityShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Speciality was successfully created"
	}
	
	def "should be able to sort the Speciality List"() {
		given:
		to SpecialityListPage

		when:
		nameSort.click()
		
		then:
		nameSort.classes().contains("asc")
	
	}
	
	def "should be able to filter the Speciality List"() {
		given:
		to SpecialityListPage

		when:
		nameFilter = "Foo"
		
		then:
		waitFor { rows.size() > 0 }
	
	}
	
	def "should be able to edit the first Speciality"() {
		when:
		to SpecialityListPage

		and:
		rows.first().editButton.click()

		then:
		at SpecialityEditPage
		
		when:
		nameField = "Foo!"
		
		and:
		saveButton.click()
		
		then:
		at SpecialityShowPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Speciality was successfully updated"
	}
	
	def "should be able to delete the first Speciality"() {
		when:
		to SpecialityListPage

		and:
		rows.first().deleteButton.click()

		then:
		at SpecialityListPage

		and:
		successMessage.displayed

		and:
		successMessage.text().contains "Speciality was successfully deleted"
      }
	
}