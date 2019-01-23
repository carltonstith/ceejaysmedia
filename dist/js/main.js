// scrollreveal.js (https://github.com/jlmakes/scrollreveal)
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

var $animation_elements = $('.slide-animation');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            setTimeout(function () {
                $element.addClass('in-view');
            }, 500);
        }
    });
}

// PORTFOLIO IMAGE ONE
sr.reveal('.portfolio-image-one', {
    duration: 1000,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, .94)',
    reset: false,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

// PORTFOLIO IMAGE TWO
sr.reveal('.portfolio-image-two', {
    duration: 1000,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, .94)',
    reset: false,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});

// PORTFOLIO IMAGE THREE
sr.reveal('.portfolio-image-three', {
    duration: 1000,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, .94)',
    reset: false,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

// PORTFOLIO IMAGE FOUR
sr.reveal('.portfolio-image-four', {
    duration: 1000,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, .94)',
    reset: false,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});
