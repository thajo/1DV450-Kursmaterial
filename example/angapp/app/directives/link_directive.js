/**
 *
 * This is a directive for handling active link in bootstrap
 */

app.directive('activeLink', ['$location', function(location) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {
                var css_class = attrs.activeLink;
                var path = $(element).children("a")[0].hash.substring(1);
                scope.location = location;
                scope.$watch('location.path()', function(newPath) {
                    if (path === newPath) {
                        element.addClass(css_class);
                    } else {
                        element.removeClass(css_class);
                    }
                });
            }

        };

    }]);