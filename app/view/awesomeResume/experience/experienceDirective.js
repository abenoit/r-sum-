awesomeResume.directive("experienceDirective", function ($sce) {
    "use strict";

    return {
        restrict: 'E',
        templateUrl: 'view/awesomeResume/experience/experience.html',
        controller: function ($scope) {

            $scope.animateElementIn = function ($el) {
                $el.removeClass('hidden');
                $el.addClass('animated fadeIn');
            };

            $scope.experiences = [
                {
                    logo: 'lectra.png',
                    date: "October 2016 to now",
                    skills: ['HTML', 'SCSS', 'React', 'Redux', 'Redux-saga', 'Storybook', 'Jest', 'Jasmine', 'Git'],
                    content: $sce.trustAsHtml("I joind the R&D team to work on a solution for the fashion industry. " +
                        "Working with Kanban agile methodology, my missions were :" +
                        "<ul class='tasks'><li> Conception and development of UI components and interfaces using React</li>" +
                        "<li>Integration of UX team work</li>" +
                        "<li>Coding of automated tests</ul>")
                },
                {
                    logo: 'atinternet.jpg',
                    date: "September 2014 to September 2016",
                    skills: ['HTML/CSS', 'Less', 'AngularJs', 'Bootstrap', 'C#', 'VB', 'SQL Server', 'Mongo', 'Redis', 'NodeJs', 'Svn/Git'],
                    content: $sce.trustAsHtml("I joind the R&D \"platform\" team. Working with SCRUM agile methodology, my missions were : <br/>" +
                        "<ul><li> Conception and development of components (services, directives ..) using d'AngularJs and NodeJS</li>" +
                        "<li>Developed interfaces for the clients (all applications related to access right management and users' profile), and also interfaces for an internal usage. I used Javascript, AngularJS, Jquery, Bootstrap</li>" +
                        "<li>Developed services en C#.Net et SQL Server in a micro-service architecture</li>" +
                        "<li>Developed a platform containing applications that helped the other teams to deploy their applications into the solution</li>" +
                        "<li>Improvement of the security system and integration within multiple applications</li></ul>")
                }, {
                    logo: 'Total.jpg',
                    skills: ['HTML/CSS', 'Jquery', 'Jquery Mobile', 'MySql', 'PHP', 'Android', 'Objective-c', 'Project Management'],
                    date: 'June to Septembre 2014',
                    content: $sce.trustAsHtml("I joined a mobile project management team at Total Marketing Services" +
                        "<div class='exp-part'>Project Management</div>" +
                        "I mostely worked on a part of mobile website of Total.com. The project was about integrating a solution for buying a car wash codes. " +
                        "I had to discuss with all the actors of the project, daily follow-up, internal and external communication about its progress and make everything in my power to make sure that the project would come at the end in time." +
                        "I also wrote an acceptance program for a panel of people to test the application to check on the application usability. Abnormalities have been studied with the service provider." +
                        "<div class='exp-part'>R&D</div>" +
                        "I developed multiple application prototypes (POCs)" +
                        "<ul><li> Developed several web-mobile interfaces, including a contact directory for Total employees and their major clients (HTML5, Javascript, JQuery, JQuery Mobile, PHP, MySQL)</li>" +
                        "<li>Native applications to test the possible interactions between each other (Android, iOS)</li></ul>")
                }, {
                    logo: 'isit.png',
                    date: 'February to July 2013',
                    skills: ['HTML', 'CSS', 'PHP', 'MySql', 'Git'],
                    content: $sce.trustAsHtml("<div class='exp-part'>Context</div>" +
                        "In a Japanese laboratory, I joined a R&D team to work on a collaborative plaftorm for developers in the cloud. The goal was to provide a platform containing many tools for developers to work and share their work with collaborators." +
                        "<div class='exp-part'>My missions</div> " +
                        "First, I developed a PHP template to authenticate users using OpenId, Facebook and Twitter. Then I integrated the template into an e-commerce CMS named CS-Cart.<br/>" +
                        "I also had to search for a Git solution to integrate that was free. It has to propose multiple right levels from a project to another and also a preview of activities in the repository.<br/>" +
                        "Final but not least, I set up an authentication system working cross-domain (SSO) so a user could keep his / her session opened in every application (s)he would use, with no need to authenticate in each.")
                }, {
                    logo: 'enseirb.png',
                    skills: ['HTML', 'CSS', 'Javascript', 'MySql', 'SVN'],
                    content: $sce.trustAsHtml("Team web developments : Created a website working with database for school partnerships.")
                }, {
                    title: 'Loopweb',
                    skills: ['HTML', 'CSS', 'Javascript', 'MySql', 'SVN'],
                    date: 'August 2011 to August 2012',
                    content: $sce.trustAsHtml("Independant Contractor <ul>" +
                        "<li>Developed a Joomla component intended for a renovation company commercials</li>" +
                        "<li>Conceived, developed and launched a restaurant website with an administration interface</li></ul>")
                }, {
                    logo: 'msp.jpg',
                    skills: ['HTML', 'CSS', 'Javascript', 'Joomla!', 'MySql'],
                    date: 'April to August 2011',
                    content: $sce.trustAsHtml("Web sites / mobile web sites development, and Joomla templates integration")
                }];
        }
    };
});