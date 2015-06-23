describe('Speciality Routes: ', function() {
    beforeEach(module('myApp.speciality'));
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
			$templateCache.put('/my-app/speciality/list.html', 'list page');
		}));
		
		it('should load the list page by default', function() { 
			$location.path('/speciality/'); 
			$rootScope.$digest(); 
			expect($state.current.name).toBe('speciality.list');
		});
		
		it('should load the list page on successful load of /list', function() {
			$location.path('/speciality/list');
			$rootScope.$digest();
			expect($state.current.name).toBe('speciality.list');
		});
		
	});

	describe('Create route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/speciality/create-edit.html', 'create page');
		}));
		
		it('should load the create page on successful load of /create', function() {
			$location.path('/speciality/create');
			$rootScope.$digest();
			expect($state.current.name).toBe('speciality.create');
		});
	});
	
	describe('Edit route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/speciality/create-edit.html', 'edit page');
		}));
		
		it('should load the edit page on successful load of /edit', function() {
			$location.path('/speciality/edit/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('speciality.edit');
		});
	});	
	
	describe('Show route: ', function() {
		beforeEach(inject(function($templateCache) {
			$templateCache.put('/my-app/speciality/show.html', 'show page');
		}));
		
		it('should load the show page on successful load of /show', function() {
			$location.path('/speciality/show/1');
			$rootScope.$digest();
			expect($state.current.name).toBe('speciality.show');
		});
	});	
	
});