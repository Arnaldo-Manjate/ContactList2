var ctrl = angular.module("allControllers",[]);


// Search Controller
ctrl.controller("searchController",["$scope","$http",function($scope,$http) {
    
    $http.get("../json/contacts.json").then(function(promise) {
        $scope.contacts = promise.data;

        console.log($scope.contacts);
    });

    $scope.boss = "naldo";
}]);

// Detail Controller
ctrl.controller("detailController",["$scope","$http","$routeParams",function ($scope,$http,$routeParams) {
    
    $http.get("../json/contacts.json").then(function (promise) {
        $scope.details = promise.data;
        $scope.idx = $routeParams.index;
        //console.log($scope.idx,"\n" ,$scope.details);

        // Calculation or the next and prev varibles for navigation
        // This is all depandant on what the current Route Param Id is
        // This Calculation cause the variables to never go out of the length o the array

        // determining the previous page 
        if( $routeParams.index > 0 ){
            $scope.prev = Number($routeParams.index) -1;
        }else{
            $scope.prev = $scope.details.length - 1;
        }
        // determining the next page
        if( $routeParams.index < $scope.details.length - 1){
            $scope.next = Number($routeParams.index) + 1;
        }else{
            $scope.next = 0;
        } 
        
       
    });


}]);

