angular.module('app',['ui.router','oc.lazyLoad'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('root',{
			url: '/',
			template: '<strong>Home pages</strong>'
		})
		.state('about',{
			url: '/about',
			templateUrl: 'about.html',
			controller: 'aboutCtrl'
		})
		.state('firstMessage',{
			url: '/first-msg',
			templateUrl: 'message.html',
			controller: 'messageCtrl'
		});
		$urlRouterProvider
			.otherwise('/');
}])
.controller('messageCtrl',['$scope', function($scope){
	$scope.a = 5;
	$scope.b = 5;
}])
.controller('aboutCtrl',['$scope', function($scope){
	$scope.a = 15;
	$scope.b = 15;
}]);