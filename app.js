var app = angular.module("firecomApp", ["firebase"]);

app.controller("MainCtrl", function($scope, $firebase) {
	
	var ref = new Firebase("https://bird-strikes.firebaseio.com/0/strikes");
	var sync = $firebase(ref);

	$scope.items = sync.$asObject();
	// for debugging
	console.log($scope.items);

});