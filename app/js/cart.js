const main = function() {
// Open
    $('.cart_icon').click(function() {
        $('.shoppingCart').animate({
            right: '0px'
        }, 200)

        $('body').animate({
            right: '385px'
        }, 200)
        $(".body").css("overflow", "hidden")
        $(".blackout").css("display", "block")
    });


// Close

    $('.icon-close').click(function(){

        $('.shoppingCart').animate({
            right: '-385px'
        }, 200)

        $('body').animate({
            right: '0px'
        }, 200)
        $(".blackout").css("display", "none")
        $(".body").css("overflow", "auto")
    });
};

$(document).ready(main);