class UrlMappings {

    static mappings = {
        												'/api/owner'(resources:'owner')
'/api/pet'(resources:'pet')
'/api/petType'(resources:'petType')
'/api/speciality'(resources:'speciality')
'/api/vet'(resources:'vet')
'/api/visit'(resources:'visit')
"/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
