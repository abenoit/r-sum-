awesomeResume.directive("schoolDirective", function () {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'view/awesomeResume/school/school.html',
        controller: function ($scope, $rootScope) {
            $scope.animateEnseirbIn = function($el) {
                $el.removeClass('hidden');
                $el.addClass('animated fadeInLeft');
            };

            $scope.animateIutIn = function($el) {
                $el.removeClass('hidden');
                $el.addClass('animated fadeInRight');
            };

            $scope.setActive = function () {
                console.log('skills tab is active');
                $rootScope.activeTab = 'skills';
            }

        }
    };

});