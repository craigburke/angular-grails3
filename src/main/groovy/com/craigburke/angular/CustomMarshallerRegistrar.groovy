package com.craigburke.angular

import grails.converters.JSON
import javax.annotation.PostConstruct

class CustomMarshallerRegistrar {
    
	@PostConstruct
    void registerMarshallers() {

	   		JSON.registerObjectMarshaller(Owner) {
	   			def map = [:]
	   			map['id'] = it?.id
	   			map['firstName'] = it?.firstName
			map['lastName'] = it?.lastName
			map['pets'] = it?.pets
			map['address'] = it?.address
			map['city'] = it?.city
			map['telephone'] = it?.telephone
	   	    	map['toText'] = it?.toString()
	   			return map 
	   		}

	   		JSON.registerObjectMarshaller(Pet) {
	   			def map = [:]
	   			map['id'] = it?.id
	   			map['birthDate'] = it?.birthDate
			map['owner'] = it?.owner
			map['type'] = it?.type
			map['visits'] = it?.visits
			map['name'] = it?.name
	   	    	map['toText'] = it?.toString()
	   			return map 
	   		}

	   		JSON.registerObjectMarshaller(PetType) {
	   			def map = [:]
	   			map['id'] = it?.id
	   			map['name'] = it?.name
	   	    	map['toText'] = it?.toString()
	   			return map 
	   		}

	   		JSON.registerObjectMarshaller(Speciality) {
	   			def map = [:]
	   			map['id'] = it?.id
	   			map['name'] = it?.name
	   	    	map['toText'] = it?.toString()
	   			return map 
	   		}

	   		JSON.registerObjectMarshaller(Vet) {
	   			def map = [:]
	   			map['id'] = it?.id
	   			map['specialities'] = it?.specialities
			map['firstName'] = it?.firstName
			map['lastName'] = it?.lastName
	   	    	map['toText'] = it?.toString()
	   			return map 
	   		}

	   		JSON.registerObjectMarshaller(Visit) {
	   			def map = [:]
	   			map['id'] = it?.id
	   			map['date'] = it?.date
			map['pet'] = it?.pet
			map['description'] = it?.description
	   	    	map['toText'] = it?.toString()
	   			return map 
	   		} 
	}

}