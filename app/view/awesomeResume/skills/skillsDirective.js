awesomeResume.directive("skillsDirective", function () {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'view/awesomeResume/skills/skills.html',
        scope: false,
        controller: function ($scope) {

            $scope.radarOptions = {
                scaleOverride: true,
                scaleSteps: 5,
                scaleStepWidth: 20,
                scaleStartValue: 0
            };

            $scope.frontSkillsLabel = ["HTML", "SCSS / Less", "Jasmine / Jest", "AngularJs", "React", "Redux - Redux Saga", "Storybook"];
            $scope.backSkillsLabel = ["C#.Net", "Java", "SQL Server", "Mongo", "Redis", "NodeJs"];
            $scope.softwareSkillsLabel = ["Windows", "Linux / MacOs", "Jenkins", "Sonar", "RabbitMQ", "Git", "SVN"];

            $scope.frontSkillsLevel = [[90, 90, 90, 80, 80, 80, 70]];
            $scope.backSkillsLevel = [[70, 60, 70, 60, 70, 60]];
            $scope.softwareSkillsLevel = [[100, 90, 70, 70, 60, 85, 90]];
        }
    };
});