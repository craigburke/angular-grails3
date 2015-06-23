describe('Vet Routes: ', function() {
    beforeEach(module('myApp.vet'));
	var $location, $state, $rootScope, $q;

	beforeEach(module(function($provide) {          
		var ServiceMock = {
			list: function() {
				var deferred = $q.defer();
				deferred.resolve([]);
				return deferred.promise;
			},
			get: function() {
				var deferred = $q.defer();
				deferred.resolve({});
				return deferred.promise;
			},
			create: function() {
				var deferred = $q.defer();
				deferred.resolve({});
				return deferred.promise;
			}
		}
		$provide.value('VetService', ServiceMock);				
		$provide.value('SpecialityService', ServiceMock);	
	}));
	
	beforeEach(inject(
		function(_$location_, _$state_, _$rootScope_, _$q_) {
			$location = _$location_;
			$state = _$state_;
			$rootScope = _$rootScope_;
			$q = _$q_;
		}	
	));
	
	describe('Index route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/vet/list.html', 'list page');
		}));
		
		it('should load the list page by default', function() { 
			$location.path('/vet/'); 
			$rootScope.$digest(); 
			expect($state.current.name).toBe('vet.list');
		});
		
		it('should load the list page on successful load of /list', function() {
			$location.path('/vet/list');
			$rootScope.$digest();
			expect($state.current.name).toBe('vet.list');
		});
		
	});

	describe('Create route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/vet/create-edit.html', 'create page');
		}));
		
		it('should load the create page on successful load of /create', function() {
			$location.path('/vet/create');
			$rootScope.$digest();
			expect($state.current.name).toBe('vet.create');
		});
	});
	
	describe('Edit route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/vet/create-edit.html', 'edit page');
		}));
		
		it('should load the edit page on successful load of /edit', function() {
			$location.path('/vet/edit/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('vet.edit');
		});
	});	
	
	describe('Show route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/vet/show.html', 'show page');
		}));
		
		it('should load the show page on successful load of /show', function() {
			$location.path('/vet/show/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('vet.show');
		});
	});	
	
});