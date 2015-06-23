describe('Speciality Controllers: ', function() {

    var item = {'foo': 'bar', 'count': 100};

    beforeEach(module('myApp.speciality.controllers'));
    beforeEach(module(function($provide) {
    	$provide.value('speciality', item);

	}));
	

    describe('SpecialityShowCtrl: ', function() {
        var ctrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('speciality', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('SpecialityShowCtrl', { $scope: scope });
            }
        ));

        it('should have the speciality on the scope', function() {
            expect(ctrl.speciality).toEqual(item);
        });
    });

    describe('SpecialityCreateEditCtrl: ', function() {
        var ctrl, scope;


        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('SpecialityCreateEditCtrl', { $scope: scope });
            }
        ));

        it('should have the speciality on the scope', function() {
            expect(ctrl.speciality).toEqual(item);
        });
    });

    describe('SpecialityListCtrl: ', function() {
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

            $provide.value('SpecialityService', mockCrudService);
            $provide.value('specialityList', items);

            $provide.value('pageSize', PAGE_SIZE);
        }));

        beforeEach(inject(
            function ($controller, $rootScope, $q) {
                deferred = $q.defer();
                scope = $rootScope.$new();
                ctrl = $controller('SpecialityListCtrl', { $scope: scope });
            }
        ));

        it('should have the specialityList and default values set on the scope', function() {
            expect(ctrl.pageSize).toEqual(PAGE_SIZE);
            expect(ctrl.specialityList).toEqual(items);
            expect(ctrl.page).toEqual(1);
        });

        it('reload should reset page', function() {
            ctrl.page = 2;
            ctrl.reload();
            scope.$digest();

            expect(ctrl.page).toEqual(1);
            expect(ctrl.specialityList).toEqual(items2);
        });

    });


});