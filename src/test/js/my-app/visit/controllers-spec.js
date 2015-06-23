describe('Visit Controllers: ', function() {

    var item = {'foo': 'bar', 'count': 100};

    beforeEach(module('myApp.visit.controllers'));
    beforeEach(module(function($provide) {
    	$provide.value('visit', item);
		$provide.value('petList', []);
	}));
	

    describe('VisitShowCtrl: ', function() {
        var ctrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('visit', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('VisitShowCtrl', { $scope: scope });
            }
        ));

        it('should have the visit on the scope', function() {
            expect(ctrl.visit).toEqual(item);
        });
    });

    describe('VisitCreateEditCtrl: ', function() {
        var ctrl, scope;


        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('VisitCreateEditCtrl', { $scope: scope });
            }
        ));

        it('should have the visit on the scope', function() {
            expect(ctrl.visit).toEqual(item);
        });
    });

    describe('VisitListCtrl: ', function() {
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

            $provide.value('VisitService', mockCrudService);
            $provide.value('visitList', items);
			$provide.value('petList', []);
            $provide.value('pageSize', PAGE_SIZE);
        }));

        beforeEach(inject(
            function ($controller, $rootScope, $q) {
                deferred = $q.defer();
                scope = $rootScope.$new();
                ctrl = $controller('VisitListCtrl', { $scope: scope });
            }
        ));

        it('should have the visitList and default values set on the scope', function() {
            expect(ctrl.pageSize).toEqual(PAGE_SIZE);
            expect(ctrl.visitList).toEqual(items);
            expect(ctrl.page).toEqual(1);
        });

        it('reload should reset page', function() {
            ctrl.page = 2;
            ctrl.reload();
            scope.$digest();

            expect(ctrl.page).toEqual(1);
            expect(ctrl.visitList).toEqual(items2);
        });

    });


});