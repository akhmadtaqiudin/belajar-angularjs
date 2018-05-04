//translate modul
'use strict'
angular.module('app',['ui.router','oc.lazyLoad'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('root',{
			url: '/',
			template: '<strong>Home pages</strong>'
		})
		.state('about',{
			url: '/about',
			templateUrl: 'modul/about.html',
			controller: 'aboutCtrl'
		})
		.state('firstMessage',{
			url: '/first-msg',
			templateUrl: 'modul/message.html',
			controller: 'messageCtrl'
		})
		.state('login',{
			url: '/login',
			templateUrl: 'modul/login.html',
			controller: 'loginCtrl'
		})
		.state('hitung',{
			url: '/hitung',
			templateUrl: 'modul/hitung.html',
			controller: 'hitungCtrl'
		})
		.state('tambah',{
			url: '/tambah/:a/:b',
			templateUrl: 'modul/tambah.html',
			controller: 'tambahCtrl'
		});
		$urlRouterProvider
			.otherwise('/');
}])
.controller('hitungCtrl',['$scope', '$state', function($scope, $state){
	$scope.a = 0;
	$scope.b = 0;

	$scope.doAdd = function(){
		$state.go('tambah',{
			a: $scope.a,
			b: $scope.b
		});
	}
}])
.controller('tambahCtrl',['$scope', '$stateParams', '$state', function($scope, $stateParams, $state){
	
	console.log($state);
	$scope.a = 0;
	$scope.b = 0;

	$scope.a = $state.params.a;
	$scope.b = $state.params.b;

	$scope.hasil = parseInt($scope.a) + parseInt($scope.b);

	$scope.goBack= function(){
		$state.go('hitung');
		//console.log($state);
	}
}])
.controller('messageCtrl',['$scope', function($scope){
	$scope.a = 5;
	$scope.b = 5;
}])
.controller('aboutCtrl',['$scope', function($scope){
	$scope.a = 15;
	$scope.b = 15;
}])
.controller('loginCtrl',['$scope', function($scope){
	$scope.a = 15;
	$scope.b = 15;
}]);