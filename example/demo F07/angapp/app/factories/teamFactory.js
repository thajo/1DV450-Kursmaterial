/**
 * Use this service/factory to handle the teams data
 * This solution could be little chatty to loacalstorage
 * but for this example its OK
 */
app.factory('teamFactory', ['localStorageFactory', function(dataStorage) { // inject localStorageFactory  call it dataStorage

    var teams = [];
    var factory = {};

    // read from localstorage
    factory.getTeams = function() {
        if(dataStorage.canDo()) {
            teams = dataStorage.load("teams") || [];
        }
        else {
            alert("Sorry, no support");
        }
        return teams;
    }

    // save to localstorage
    factory.addTeam = function(team) {
        teams.push(team);
        dataStorage.save(team);
    }


    factory.deleteTeam = function(team) {
        var i = teams.indexOf(team);
        teams.splice(i, 1);
        dataStorage.delete(team);
    }

    factory.updateTeam = function(team) {
        dataStorage.update(team);

    }


    // Well....don't like this...but just fpr practice
    factory.getTeamByName= function(name) {
        // find in the teams
        var t;
        for(var i = 0; i < teams.length; i++) {
            t = teams[i];
            if(t.name == name) {
                return dataStorage.get(t.id);
            }
        }
        return null;

    }

    return factory;


}]);