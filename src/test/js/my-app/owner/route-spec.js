describe('Owner Routes: ', function() {
    beforeEach(module('myApp.owner'));
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
		$provide.value('OwnerService', ServiceMock);				
		$provide.value('PetService', ServiceMock);	
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
			$templateCache.put('/my-app/owner/list.html', 'list page');
		}));
		
		it('should load the list page by default', function() { 
			$location.path('/owner/'); 
			$rootScope.$digest(); 
			expect($state.current.name).toBe('owner.list');
		});
		
		it('should load the list page on successful load of /list', function() {
			$location.path('/owner/list');
			$rootScope.$digest();
			expect($state.current.name).toBe('owner.list');
		});
		
	});

	describe('Create route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/owner/create-edit.html', 'create page');
		}));
		
		it('should load the create page on successful load of /create', function() {
			$location.path('/owner/create');
			$rootScope.$digest();
			expect($state.current.name).toBe('owner.create');
		});
	});
	
	describe('Edit route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/owner/create-edit.html', 'edit page');
		}));
		
		it('should load the edit page on successful load of /edit', function() {
			$location.path('/owner/edit/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('owner.edit');
		});
	});	
	
	describe('Show route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/owner/show.html', 'show page');
		}));
		
		it('should load the show page on successful load of /show', function() {
			$location.path('/owner/show/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('owner.show');
		});
	});	
	
});