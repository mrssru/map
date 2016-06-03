var app = angular.module('app', []);

app.controller('mapCtrl', function($scope) {});

app.directive('map', function() {
    return {
        restrict: 'E',
        templateUrl: '/map/app/templates/map.svg',
        scope: {
            path: '@'
        },
        controller: function($scope, $location, $attrs) {
            var url = $attrs.path;
            $scope.getHref = function(value) {
                if(url === undefined) {
                    $location.search("region", value);
                } else {
                    $location.url(url + "?region=" + value);
                }
            };

            $scope.go = function (path) {
                $location.path(path);
            };
            $scope.moved = function(event, name) {
                $scope.x = event.pageX;
                $scope.y = event.pageY;
                $scope.name = name;
            };
            $scope.show = false;
            $scope.hoverIn = function() {
                $scope.show = true;
            };
            $scope.hoverOut = function() {
                $scope.show = false;
            }
        }
    };
});