/**
 * Use this service/factory to handle the teams data
 *
 */
app.factory('teamFactory', function(localStorageFactory) {

    var teams = [];
    var factory = {};

    // read from localstorage
    factory.getTeams = function() {
        if(localStorageFactory.canDo()) {
            teams = localStorageFactory.load("teams") || [];
        }
        else {
            alert("Sorry, no support");
        }
        return teams;
    }

    // save to localstorage
    factory.addTeam = function(team) {
        teams.push(team);
        localStorageFactory.save(team);
    }


    factory.deleteTeam = function(team) {
        var i = teams.indexOf(team);
        teams.splice(i, 1);
        localStorageFactory.delete(team);
    }

    factory.updateTeam = function(team) {
        localStorageFactory.update(team);

    }

    factory.getTeamByName= function(name) {
        // find in the teams
        var t;
        for(var i = 0; i < teams.length; i++) {
            t = teams[i];
            if(t.name == name) {
                return localStorageFactory.get(t.id);
            }
        }
        return null;

    }

    return factory;


});