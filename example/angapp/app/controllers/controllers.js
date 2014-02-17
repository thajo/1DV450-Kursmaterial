
// register the TeamController - The only controller in this application
// the controller gets dependence injections; the scope, the routeParameters, location, and the factories
app.controller("TeamController", function TeamController($scope, $routeParams, $location, teamFactory, localStorageFactory) {

    // get all teams from the factory
    $scope.teams = teamFactory.getTeams() || [];

    // Don't really  like this !
    $scope.current_team = teamFactory.getTeamByName($routeParams.name) || null;

    // Add a new team, called from add.html with the temporary newTeam model attribute
    $scope.addTeam = function() {
        teamFactory.addTeam(
            {
                id: id(), // just simulate an id as we not working with a server
                name: $scope.newTeam.name,
                nickname : $scope.newTeam.nickname
            });
        $scope.newTeam = null;
    };

    // Remove a team
    $scope.deleteTeam = function(team) {
        teamFactory.deleteTeam(team);
    }

    // Update a team
    $scope.updateTeam = function(team) {
        teamFactory.updateTeam(team);
        $location.path( "/" ); // redirect when ready
    }

    // code for checking if an array is empty
    $scope.isEmpty = function (obj) {
        return angular.equals([],obj);
    };

    // own function Simulate id - just for demo
    var id = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
});