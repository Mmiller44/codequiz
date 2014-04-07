'use strict';

angular.module('codequizApp')
  .controller('MainCtrl', ['$scope','$resource', function($scope, $resource) {

 	var User = $resource('http://localhost:3000/get-all-quizzes', {});
  	$scope.quizzes = User.query({}, function() {
  });

	// RestangularProvider.setBaseUrl('http://localhost:3000');
	// var baseQuizzes = Restangular.all('/get-all-quizzes');
	// var items = baseQuizzes.getList().$Object;
	// console.log(items);
}]);

// .config(function(RestangularProvider) {
//   RestangularProvider.setBaseUrl('http://www.google.com');
//   RestangularProvider.setRequestSuffix('.json');
// });
