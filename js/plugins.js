$(document).ready(function () {
    /* Carousel */
    $('.carousel').carousel({
        Interval: 4000,
    })

    // Show color option div when click on the gear
    $('.toolbox i').click(function () {
        $('.color-option').toggle(600);
    })

    // change themeColor onclick
    $('.color-option li').each(function (index) {
        // set li background color
        $(this).css('background-color', $(this).attr('data-color')),

        // change --main-color value onClick  
        $(this).click(function () {
            $("html").get(0).style.setProperty("--main-color", $(this).attr('data-color'));
        })
    })

    // caching scroll btn
    let scrollBtn = $('.scroll-to-top');

    // show btn on scroll
    $(window).scroll(function () {
        $(this).scrollTop() >= 600 ? scrollBtn.fadeIn(1000) : scrollBtn.fadeOut(1000);
        
    })
    
    // scroll btn click event
    scrollBtn.click(function () {
        $(window).scrollTop(0)
    })
})

// loading Screen
$(window).load(function () {
    // Show the Scroll
    $('body').css('overflow', 'auto')
    
    $('.loading-overlay .sk-folding-cube').fadeOut(1000, function () {
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        })
    })
})