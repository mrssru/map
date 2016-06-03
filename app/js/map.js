var app = angular.module('app', []);

app.controller('mapCtrl', function($scope) {});

app.directive('map', function() {
    return {
        restrict: 'E',
        templateUrl: '/map/app/templates/map1.svg',
        scope: {
            path: '@'
        },
        controller: function($scope, $location, $attrs) {
            var url = $attrs.path;
            $scope.getHref = function(value) {
                var parent = $('map').parent();
                parent.find('select option').each(function () {
                    if ($(this).text().indexOf(value) >= 0) {
                        $(this).attr('selected', 'selected');
                    }
                });
            };

            $scope.go = function (path) {
                $location.path(path);
            };
            $scope.moved = function(event, name) {
                $scope.x = event.clientX-parseInt($(".wrapper").offset().left,10);
                $scope.y = event.pageY-175;
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