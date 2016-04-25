awesomeResume.directive("experienceDirective", function ($sce) {
    return {
        restrict: 'E',
        templateUrl: 'view/awesomeResume/experience/experience.html',
        controller: function ($scope) {

            $scope.animateElementIn = function ($el) {
                $el.removeClass('hidden');
                $el.addClass('animated fadeIn');
            };

            $scope.experiences = [{
                logo: 'atinternet.jpg',
                date: "De septembre 2014 à aujourd'hui",
                skills: ['HTML/CSS', 'Less', 'AngularJs', 'Bootstrap', 'C#', 'VB', 'SQL Server', 'Mongo', 'Redis', 'NodeJs', 'Svn/Git'],
                content: $sce.trustAsHtml("J'ai rejoint l'équipe Platform. Dans un environnement appliquant les méthodes agiles SCRUM, mes missions sont les suivantes : <br/>" +
                    "<ul><li> Développement de composants et outils génériques (services, directives ..) à l'aide d'AngularJs, Grunt et NodeJS</li>" +
                    "<li>Développement d'interfaces à destination des clients (toutes les applications rattachées aux droits d'accès), ainsi que d'interfaces à usage interne. Les principales technologies utilisées sont le Javascript, AngularJS, Jquery, Bootstrap</li>" +
                    "<li>Développement de services en C#.Net et SQL Server. A chaque service est rattaché son lot de tests unitaires (avec Moq) et de tests d'intégration</li>" +
                    "<li>Aider les autres équipes à déployer leurs applications sur différents environnements au travers d'une interface de déploiement développée par l'équipe</li>" +
                    "<li>Développement de tout ce qui tourne autour de l'authentification et de la configuration des utilisateurs (profil, sites, les droits selon les applications ...)</li></ul>")
            }, {
                logo: 'Total.jpg',
                skills: ['HTML/CSS', 'Jquery', 'Jquery Mobile', 'MySql', 'PHP', 'Android', 'Objective-c', 'Gestion de projet'],
                date: 'De juin à septembre 2014',
                content: $sce.trustAsHtml("J'ai rejoint une équipe de chefs de projet chez Total Marketing Services, et je travaillais plus précisément sur des sujets concernant la mobilité. " +
                    "<div class='exp-part'>Gestion de projet</div>" +
                    "J'étais en charge de la gestion de plusieurs projets, et à différents niveaux. " +
                    "Mon plus gros travail a porté sur la partie du site mobile de Total sur le lavage automobile. J'ai été en charge de discuter des spécifications sur le projet avec les acteurs concernés, suivre le projet au quotidien, de communiquer sur celui-ci et de faire en sorte que tout se déroule dans les temps." +
                    "Quelques semaines avant la sortie du projet, j'ai écrit un plan de recette permettant à un panel de personnes internes à Total de tester l'application et de remonter les anomalies qui ont ensuite été étudiées avec le prestataire pour trouver des solutions." +
                    "<div class='exp-part'>Recherche et développement</div>" +
                    "J'ai développé plusieurs applications pour Total dans le cadre de POCs" +
                    "<ul><li> Développement de plusieurs interfaces web-mobiles, dont un annuaire de contact entre les clients grands comptes et leurs contacts chez Total (HTML5, Javascript, JQuery, JQuery Mobile, PHP, MySQL)</li>" +
                    "<li>Développement d'applications natives (Android, iOS)</li></ul>")
            }, {
                logo: 'isit.png',
                date: 'De février à juillet 2013',
                skills: ['HTML', 'CSS', 'PHP', 'MySql', 'Git'],
                content: $sce.trustAsHtml("<div class='exp-part'>Contexte</div>" +
                    "Dans un laboratoire au Japon, j'ai rejoint un groupe de recherche et de développement en web pour travailler sur un projet de platforme collaborative de développement dans le cloud. Le but était de créer une platforme regroupant plusieurs outils pour travailler et partager son travail à des colaborateurs." +
                    "<div class='exp-part'>Mes missions</div> " +
                    "J'ai d'abord développé un template PHP pour authentifier les utilisateurs à l'aide d'OpenId, Facebook et Twitter, que j'ai ensuite intégré dans un CMS d'e-commerce Cs-Cart.<br/>" +
                    "J'ai également été chargée de trouver une platforme Git libre et gratuite pour proposer aux utilisateurs de la platforme. Celle-ci devait proposer différents niveaux de droits par projets ainsi qu'un aperçu des activités sur le repository.<br/>" +
                    "Ma dernière mission a été de mettre en place un système d'authentification inter-domaines (SSO) pour garder d'authentification d'un utilisateur sur toutes les outils de la platforme.")
            }, {
                logo: 'enseirb.png',
                skills: ['HTML', 'CSS', 'Javascript', 'MySql', 'SVN'],
                content: $sce.trustAsHtml("Projet de développement en équipe : Création d’un site avec base de données pour les relations partenariales de l’école.")
            }, {
                title: 'Loopweb',
                skills: ['HTML', 'CSS', 'Javascript', 'MySql', 'SVN'],
                date: 'D\'août 2011 à août 2012',
                content: $sce.trustAsHtml("Création d'une auto-entreprise de création de sites web. <ul>" +
                    "<li>Développement d'un composant Joomla de gestion pour les commerciaux d'une entreprise de rénovation</li>" +
                    "<li>Etude, développement et livraison d'un site web de restaurant avec interface d'administration</li></ul>")
            }, {
                logo: 'msp.jpg',
                skills: ['HTML', 'CSS', 'Javascript', 'Joomla!', 'MySql'],
                date: 'D\'avril à août 2011',
                content: $sce.trustAsHtml("Développement de sites web, web mobiles et intégration de template dans Joomla!")
            }];
        }
    };
});