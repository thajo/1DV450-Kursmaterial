app.filter('showOnly', function() {

    var fnk = function(input, startIndex, nrOfItems) {
        return input.slice(startIndex, startIndex+nrOfItems);
    };
    return fnk;

})