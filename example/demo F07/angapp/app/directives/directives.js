
app.directive('button', function() {
    return {
        restrict: 'E', // Namnet är button och restrict till E = element

        compile: function(element, attrs) { // compile körs innan scope finns
            element.addClass('btn');

            if(attrs.type === "submit") {
                element.addClass("btn-danger");
            }
        }
    };
});




app.directive('myImage', function() {
    return {
        restrict: 'M', // M E C A
        compile: function(element, attrs) {
            // domhantering - kan använda JQuery t.ex.
            var img = document.createElement('img');
            img.src = 'http://angularjs.org/img/AngularJS-large.png';

            // directives as comment
            if (element[0].nodeType === 8) {
                element.replaceWith(img);
            } else {
                element[0].appendChild(img);
            }
        }
    }

});


/**
 *
 * This is a directive for handling active link
 */

app.directive('activeLink', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) { // Får med oss ett scope

            var css_class = attrs.activeLink;

            var path;

            // Vi kan observera ett attributs värde måste användas om värdet sätts med interpolation {{value}}
            // skulle därför kunnat plocka värdet direkt i detta exempel
            // http://stackoverflow.com/questions/14876112/difference-between-observers-and-watchers
            // http://stackoverflow.com/questions/11913841/accessing-attributes-from-an-angularjs-directive
            attrs.$observe('href', function(value) {
                path = value.substring(1);
            });

            scope.location = location; // Sparar undan location-objectet för att kunna kolla detta

            // Watch reagerar på förändringar i location.path()
            scope.$watch('location.path()', function(newPath) {

                // om path är lika med den aktuella (newPath)
                if (path === newPath) {
                    element.addClass(css_class);
                } else {
                    element.removeClass(css_class);
                }
            });
        }

    };

}]);


