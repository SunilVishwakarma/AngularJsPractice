/**
 * AngularJS Test Cases
 */


angular.module('myApp', []).controller('bodyController', function($scope) {

	$scope.name = 'BBB';
	
	$scope.cancel=function(){
		alert("Do you want to Exit !");
	}
});