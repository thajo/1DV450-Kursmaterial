
// Define the app. Include ngRoutes for routing system and ngAnimate for animation
// chain the route definitions
var app = angular.module('app', ['ngRoute', 'ngAnimate'])
.config(function ($routeProvider) {

    // In this case we have just one controller
    $routeProvider.when('/', { // show all teams
        controller: 'TeamController',
        templateUrl: 'app/partials/all.html'
    })
    .when('/add', {
        controller: 'TeamController',
        templateUrl: 'app/partials/add.html'
    })
    .when('/teams/:name', { // this is called when to update (take the name as identifier - could be conflicts at present)
        controller: 'TeamController',
        templateUrl: 'app/partials/update.html'
    })
    .otherwise({redirectTo: '/'});
});