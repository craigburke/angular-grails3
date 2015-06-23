describe('Pet Controllers: ', function() {

    var item = {'foo': 'bar', 'count': 100};

    beforeEach(module('myApp.pet.controllers'));
    beforeEach(module(function($provide) {
    	$provide.value('pet', item);
		$provide.value('ownerList', []);
		$provide.value('petTypeList', []);
		$provide.value('visitList', []);
	}));
	

    describe('PetShowCtrl: ', function() {
        var ctrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('pet', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('PetShowCtrl', { $scope: scope });
            }
        ));

        it('should have the pet on the scope', function() {
            expect(ctrl.pet).toEqual(item);
        });
    });

    describe('PetCreateEditCtrl: ', function() {
        var ctrl, scope;


        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('PetCreateEditCtrl', { $scope: scope });
            }
        ));

        it('should have the pet on the scope', function() {
            expect(ctrl.pet).toEqual(item);
        });
    });

    describe('PetListCtrl: ', function() {
        var ctrl, scope, deferred;

        var items = [
            {id: 1, name: 'Item1'},
            {id: 2, name: 'Item2'}
        ];

        var items2 = [
            {id: 3, name: 'Item3'},
            {id: 4, name: 'Item4'}
        ];

        var PAGE_SIZE = 25;

        beforeEach(module(function($provide) {

            var mockCrudService = {
                list: function() {
                    deferred.resolve(items2);
                    return deferred.promise;
                }
            };

            $provide.value('PetService', mockCrudService);
            $provide.value('petList', items);
			$provide.value('ownerList', []);
			$provide.value('typeList', []);
			$provide.value('visitsList', []);
            $provide.value('pageSize', PAGE_SIZE);
        }));

        beforeEach(inject(
            function ($controller, $rootScope, $q) {
                deferred = $q.defer();
                scope = $rootScope.$new();
                ctrl = $controller('PetListCtrl', { $scope: scope });
            }
        ));

        it('should have the petList and default values set on the scope', function() {
            expect(ctrl.pageSize).toEqual(PAGE_SIZE);
            expect(ctrl.petList).toEqual(items);
            expect(ctrl.page).toEqual(1);
        });

        it('reload should reset page', function() {
            ctrl.page = 2;
            ctrl.reload();
            scope.$digest();

            expect(ctrl.page).toEqual(1);
            expect(ctrl.petList).toEqual(items2);
        });

    });


});