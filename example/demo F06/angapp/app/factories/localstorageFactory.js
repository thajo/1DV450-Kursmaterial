/**
 * A simple localstorage service - Not to fancy, not so general, assumed JSON is used - should do a refactory
 */
app.factory('localStorageFactory', function() {

    // this is the object that should be returned
    var factory = {};

    // load from local storage
    factory.save = function(value) {
        // Use the id as a key. Bad design...dependencies
        // Could have store all data under one key maybe
        // Save as JSON
        localStorage.setItem(value.id, JSON.stringify(value));
    }

    // read the whole local storage
    factory.load = function() {
        var l = localStorage.length;
        var teams = [];
        for(var i  = 0; i < l; i++) {
            // Assume its JSON => not general
            teams.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        return teams;
    }

    // get a specific value
    factory.get = function(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    factory.delete = function(value) {
        localStorage.removeItem(value.id);
    }

    factory.update= function(value) {
        localStorage.setItem(value.id, JSON.stringify(value));
    }


    // Just a support test for browsers
    factory.canDo = function() {
        var d = 'dummie';
        try {
            localStorage.setItem(d, d);
            localStorage.removeItem(d);
            return true;
        } catch(e) {
            return false;
        }
    }
    return factory;
});