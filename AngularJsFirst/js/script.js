/**
 * javaScript file to work on directive
 */

angular.module('app' , []);

angular.module('app').controller('mainCtrl',function($scope){
	//alert("controller");
	$scope.user = {
    name: 'Shyam',
    age: 25,
    gender: 'Male'
  }
});

angular.module('app').directive('ngUserInfo', function() {
	//alert("directive");
	return {
	  restrict: 'A',
	  template : 'Name: {{ user.name }}<br/>Age: {{user.age}}<br/> Gender: {{user.gender}}'
  }  
})
