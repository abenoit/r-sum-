awesomeResume.directive("skillsDirective", function () {
    "use strict";
    
    return {
        restrict: 'E',
        templateUrl: 'view/awesomeResume/skills/skills.html',
        scope: false,
        controller: function ($scope) {

            $scope.frontSkillsLabel = ["HTML", "CSS", "Bootstrap", "AngularJs", "JQuery", "JQuery mobile", "Android"];
            $scope.backSkillsLabel = ["C#", "Java", "SQL Server", "Mongo", "Redis", "NodeJs"];
            $scope.softwareSkillsLabel = ["Windows", "Linux / MacOs", "Jenkins", "Sonar", "RabbitMQ", "Git", "SVN"];

            $scope.frontSkillsLevel = [[90, 80, 100, 80, 80, 90, 70]];
            $scope.backSkillsLevel = [[80, 80, 80, 70, 80, 70]];
            $scope.softwareSkillsLevel = [[100, 90, 80, 80, 80, 80, 95]];
        }
    };

});