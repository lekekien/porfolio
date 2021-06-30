$(document).ready(function(){
    $('#gallery').mixItUp({});

    var navPos = $("#menu-nav").position().top;
    var lastPos = 0;
    window.onscroll = function(){
        var pos = $(window).scrollTop();
        if (pos >= navPos + $("#menu-nav").height() && lastPos < pos) {
            $("#menu-nav").addClass('fixed');
        }
        if (pos < navPos && lastPos > pos) {
            $("#menu-nav").removeClass('fixed');
        }
        lastPos = pos;
    }
})