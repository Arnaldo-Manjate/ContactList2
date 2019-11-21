var coreApp = angular.module("mainApp",["allControllers","ngRoute"]);

// Routing
coreApp.config(["$routeProvider",function($routeProvider) {
    $routeProvider
                .when("/details/:index",{ templateUrl : "../veiws/detail.html",controller: "detailController"})
                .when("/", { templateUrl : "../veiws/search.html", controller: "searchController"});
                // mention which controller to use
}]);