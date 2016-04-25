var awesomeResume = angular.module('awesomeResume', ['ngRoute', 'chart.js', 'angular-scroll-animate', 'angular-timeline']);

awesomeResume.config(["$routeProvider", "ChartJsProvider",
    function ($routeProvider, ChartJsProvider) {
        $routeProvider.when("/", {
            templateUrl: 'view/awesomeResume/resume.html',
            controller: 'resumeController'
        }).otherwise({
            redirectTo: '/'
        });

        ChartJsProvider.setOptions({colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']});
    }
]);