describe('PetType Controllers: ', function() {

    var item = {'foo': 'bar', 'count': 100};

    beforeEach(module('myApp.petType.controllers'));
    beforeEach(module(function($provide) {
    	$provide.value('petType', item);

	}));
	

    describe('PetTypeShowCtrl: ', function() {
        var ctrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('petType', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('PetTypeShowCtrl', { $scope: scope });
            }
        ));

        it('should have the petType on the scope', function() {
            expect(ctrl.petType).toEqual(item);
        });
    });

    describe('PetTypeCreateEditCtrl: ', function() {
        var ctrl, scope;


        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('PetTypeCreateEditCtrl', { $scope: scope });
            }
        ));

        it('should have the petType on the scope', function() {
            expect(ctrl.petType).toEqual(item);
        });
    });

    describe('PetTypeListCtrl: ', function() {
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

            $provide.value('PetTypeService', mockCrudService);
            $provide.value('petTypeList', items);

            $provide.value('pageSize', PAGE_SIZE);
        }));

        beforeEach(inject(
            function ($controller, $rootScope, $q) {
                deferred = $q.defer();
                scope = $rootScope.$new();
                ctrl = $controller('PetTypeListCtrl', { $scope: scope });
            }
        ));

        it('should have the petTypeList and default values set on the scope', function() {
            expect(ctrl.pageSize).toEqual(PAGE_SIZE);
            expect(ctrl.petTypeList).toEqual(items);
            expect(ctrl.page).toEqual(1);
        });

        it('reload should reset page', function() {
            ctrl.page = 2;
            ctrl.reload();
            scope.$digest();

            expect(ctrl.page).toEqual(1);
            expect(ctrl.petTypeList).toEqual(items2);
        });

    });


});