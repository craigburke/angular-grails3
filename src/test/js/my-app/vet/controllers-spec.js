describe('Vet Controllers: ', function() {

    var item = {'foo': 'bar', 'count': 100};

    beforeEach(module('myApp.vet.controllers'));
    beforeEach(module(function($provide) {
    	$provide.value('vet', item);
		$provide.value('specialityList', []);
	}));
	

    describe('VetShowCtrl: ', function() {
        var ctrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('vet', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('VetShowCtrl', { $scope: scope });
            }
        ));

        it('should have the vet on the scope', function() {
            expect(ctrl.vet).toEqual(item);
        });
    });

    describe('VetCreateEditCtrl: ', function() {
        var ctrl, scope;


        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('VetCreateEditCtrl', { $scope: scope });
            }
        ));

        it('should have the vet on the scope', function() {
            expect(ctrl.vet).toEqual(item);
        });
    });

    describe('VetListCtrl: ', function() {
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

            $provide.value('VetService', mockCrudService);
            $provide.value('vetList', items);
			$provide.value('specialitiesList', []);
            $provide.value('pageSize', PAGE_SIZE);
        }));

        beforeEach(inject(
            function ($controller, $rootScope, $q) {
                deferred = $q.defer();
                scope = $rootScope.$new();
                ctrl = $controller('VetListCtrl', { $scope: scope });
            }
        ));

        it('should have the vetList and default values set on the scope', function() {
            expect(ctrl.pageSize).toEqual(PAGE_SIZE);
            expect(ctrl.vetList).toEqual(items);
            expect(ctrl.page).toEqual(1);
        });

        it('reload should reset page', function() {
            ctrl.page = 2;
            ctrl.reload();
            scope.$digest();

            expect(ctrl.page).toEqual(1);
            expect(ctrl.vetList).toEqual(items2);
        });

    });


});