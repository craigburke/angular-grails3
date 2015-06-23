describe('Owner Controllers: ', function() {

    var item = {'foo': 'bar', 'count': 100};

    beforeEach(module('myApp.owner.controllers'));
    beforeEach(module(function($provide) {
    	$provide.value('owner', item);
		$provide.value('petList', []);
	}));
	

    describe('OwnerShowCtrl: ', function() {
        var ctrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('owner', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('OwnerShowCtrl', { $scope: scope });
            }
        ));

        it('should have the owner on the scope', function() {
            expect(ctrl.owner).toEqual(item);
        });
    });

    describe('OwnerCreateEditCtrl: ', function() {
        var ctrl, scope;


        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('OwnerCreateEditCtrl', { $scope: scope });
            }
        ));

        it('should have the owner on the scope', function() {
            expect(ctrl.owner).toEqual(item);
        });
    });

    describe('OwnerListCtrl: ', function() {
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

            $provide.value('OwnerService', mockCrudService);
            $provide.value('ownerList', items);
			$provide.value('petsList', []);
            $provide.value('pageSize', PAGE_SIZE);
        }));

        beforeEach(inject(
            function ($controller, $rootScope, $q) {
                deferred = $q.defer();
                scope = $rootScope.$new();
                ctrl = $controller('OwnerListCtrl', { $scope: scope });
            }
        ));

        it('should have the ownerList and default values set on the scope', function() {
            expect(ctrl.pageSize).toEqual(PAGE_SIZE);
            expect(ctrl.ownerList).toEqual(items);
            expect(ctrl.page).toEqual(1);
        });

        it('reload should reset page', function() {
            ctrl.page = 2;
            ctrl.reload();
            scope.$digest();

            expect(ctrl.page).toEqual(1);
            expect(ctrl.ownerList).toEqual(items2);
        });

    });


});