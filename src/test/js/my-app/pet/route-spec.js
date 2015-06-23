describe('Pet Routes: ', function() {
    beforeEach(module('myApp.pet'));
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
		$provide.value('PetService', ServiceMock);				
		$provide.value('OwnerService', ServiceMock);
		$provide.value('PetTypeService', ServiceMock);
		$provide.value('VisitService', ServiceMock);	
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
			$templateCache.put('/my-app/pet/list.html', 'list page');
		}));
		
		it('should load the list page by default', function() { 
			$location.path('/pet/'); 
			$rootScope.$digest(); 
			expect($state.current.name).toBe('pet.list');
		});
		
		it('should load the list page on successful load of /list', function() {
			$location.path('/pet/list');
			$rootScope.$digest();
			expect($state.current.name).toBe('pet.list');
		});
		
	});

	describe('Create route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/pet/create-edit.html', 'create page');
		}));
		
		it('should load the create page on successful load of /create', function() {
			$location.path('/pet/create');
			$rootScope.$digest();
			expect($state.current.name).toBe('pet.create');
		});
	});
	
	describe('Edit route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/pet/create-edit.html', 'edit page');
		}));
		
		it('should load the edit page on successful load of /edit', function() {
			$location.path('/pet/edit/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('pet.edit');
		});
	});	
	
	describe('Show route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/pet/show.html', 'show page');
		}));
		
		it('should load the show page on successful load of /show', function() {
			$location.path('/pet/show/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('pet.show');
		});
	});	
	
});