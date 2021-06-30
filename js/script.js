$(document).ready(function(){
    $('#gallery').mixItUp({});

    var header = $("#menu-nav");
    window.onscroll = function(){
        console.log("win :" + window.pageYOffset)
        console.log($("#menu-nav").offset().top)
        if(window.pageYOffset >= $("#menu-nav").offset().top){
            header.addClass("sticky")
        }
        else{
            header.removeClass("sticky")
        }
    }
})