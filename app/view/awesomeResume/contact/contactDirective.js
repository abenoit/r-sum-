awesomeResume.directive("contactDirective", function () {
    return {
        restrict: 'E',
        templateUrl: 'view/awesomeResume/contact/contact.html',
        link: function ($scope) {
            var contactEmail = $("#contact-email");
            var contactPhone = $("#contact-phone");

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

            $scope.animateElementIn = function ($el) {
                $el.removeClass('hidden');
                $el.addClass('animated fadeInUp');
            };

            $(".mail-section").hover(showEmail, hideEmail);
            $(".phone-section").hover(showPhone, hidePhone);
        }
    }
});