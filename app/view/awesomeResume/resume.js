awesomeResume.controller('resumeController', function ($scope) {
    "use strict";

    var navBarElt = $(document.getElementById("navbar"));
    var contactEmail = $("#contact-email");
    var contactPhone = $("#contact-phone");

    $scope.frontSkillsLabel = ["HTML", "CSS", "Bootstrap", "AngularJs", "JQuery", "JQuery mobile", "Android"];
    $scope.backSkillsLabel = ["C#", "Java", "SQL Server"];
    $scope.softwareSkillsLabel = ["Windows", "Linux / MacOs", "Jenkins", "Sonar"];

    $scope.frontSkillsLevel = [[90, 80, 100, 80, 80, 90, 70]];
    $scope.backSkillsLevel = [[80, 80, 80]];
    $scope.softwareSkillsLevel = [[100, 90, 80, 80]];

    $scope.goTo = function(position) {
        $('html,body').animate({scrollTop: $(document.getElementById(position)).offset().top},'slow');
    };

    $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated fadeInUp');
    };

    $scope.animateNavBarOut = function () {
        navBarElt.addClass('hidden');
        navBarElt.removeClass('animated fadeInDown');
    };

    $scope.animateNavBarIn = function () {
        navBarElt.removeClass('hidden');
        navBarElt.removeClass('animated fadeOutUp');
        navBarElt.addClass('animated fadeInDown');
    };

    var showEmail = function () {
        contactEmail.removeClass("hidden");
    };

    var hideEmail = function () {
        contactEmail.addClass("hidden");
    };

    var showPhone = function () {
        contactPhone.removeClass("hidden");
    };

    var hidePhone = function () {
        contactPhone.addClass("hidden");
    };

    $(".mail-section").hover(showEmail, hideEmail);
    $(".phone-section").hover(showPhone, hidePhone);
});