$(function(){
    $('#gallery').mixItUp({});
    var navPos = $("#menu-nav").position().top;
    var lastPos = 0;
    checkFixedWhenScroll();
    $(window).on("scroll",function(){
        checkFixedWhenScroll();
    })

    $(".link-item").each(function(){
        var cur = $(this);
        cur.on("click", function(){
            var target = cur.data("target");
            $('html, body').animate({
                scrollTop: $("[data-link="+target+"]").offset().top
            }, 500);
            highlightLink(target);
        });
    })
    function highlightLink(anchor) {
        $('.link-item.active').removeClass('active');
        $('.menu-nav')
            .find('[data-target="' + anchor + '"]')
            .addClass('active');
    }
    function checkFixedWhenScroll(){
       
        var pos = $(window).scrollTop();
        var pos2 = pos + 250;
        if (pos >= navPos  && lastPos < pos) {
            $("#menu-nav").addClass('sticky');
        }
        if (pos < navPos && lastPos > pos) {
            $("#menu-nav").removeClass('sticky');
        }  
        lastPos = pos;
    
        if (pos2 > $('#home').offset().top) {
            highlightLink('home');
        }
        if (pos2 > $('#about').offset().top) {
            highlightLink('about');
        }
        if (pos2 > $('#project').offset().top) {
            highlightLink('project');
        }
    }
    
})

