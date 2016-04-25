awesomeResume.controller('resumeController', function ($scope) {
    "use strict";

    var navBarElt = $(document.getElementById("navbar"));

    $scope.tab = {active: 'home'};

    $scope.getActiveTab = function () {
        return $scope.tab.active;
    };

    $scope.setSkillsActive = function () {
        changeTab('skills');
    };

    $scope.setExpActive = function () {
        changeTab('exp');
    };

    $scope.setSchoolActive = function () {
        changeTab('school');
    };

    $scope.setContactActive = function () {
        changeTab('contact');
    };

    $scope.setAboutActive = function () {
        changeTab('about');
    };

    var changeTab = function (tab) {
        $scope.$apply(function () {
            $scope.tab.active = tab;
        });
    };

    $scope.goTo = function (position) {
        $('html,body').animate({scrollTop: $(document.getElementById(position)).offset().top}, 'slow');
    };

    $scope.animateNavBarOut = function () {
        navBarElt.addClass('hidden');
        navBarElt.removeClass('animated fadeInDown');
    };

    $scope.animateNavBarIn = function () {
        navBarElt.removeClass('hidden');
        navBarElt.addClass('animated fadeInDown');
    };

});