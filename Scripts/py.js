

$(function () {
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
            previous: 'Back',
            next: 'Next',
            finish: 'Confirm',
            current: ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            var room = $('#room').val();
            var day = $('#day').val();
            var time = $('#time').val();

            $('#fullname-val').text(fullname);
            $('#room-val').text(room);
            $('#day-val').text(day);
            $('#time-val').text(time);

            return true;
        }
    });
    $("#day").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText: '<i class="zmdi zmdi-chevron-down"></i>',
    });
});


jQuery(function ($) {
    var pop = $('.map-popup');
    pop.click(function (e) {
        e.stopPropagation();
    });

    $('a.marker').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).next('.map-popup').toggleClass('open');
        $(this).parent().siblings().children('.map-popup').removeClass('open');
    });

    $(document).click(function () {
        pop.removeClass('open');
    });

    pop.each(function () {
        var w = $(window).outerWidth(),
            edge = Math.round($(this).offset().left + $(this).outerWidth());
        if (w < edge) {
            $(this).addClass('edge');
        }
    });
});







