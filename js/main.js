var projects = [
    {
        slide : [
            "images/projects/naij/naij1.png",
            "images/projects/naij/naij2.png",
            "images/projects/naij/naij3.png"
        ],
        title : "Naij Auto",
        subtitle: "Auto Portal to Buy and Sell Cars Online in Nigeria",
        detail: "<a href='https://naijauto.com'>NaijAuto</a> is a platform that lets user find, buy a used car faster,easier and more effective in Nigeria."
    },
    {
        slide : [
            "images/projects/dvg.jpg",
        ],
        title : "DaiViet Group Internal Software",
        subtitle: "Human Resource Management",
        detail: "This is a information management system. Employees can access to this app for check their benefit, time work, etc."
    },
    {
        slide : [
            "images/projects/vcbs/vcbs1.jpg",
            "images/projects/vcbs/vcbs3.png",
        ],
        title : "Vietcombank Stock API",
        subtitle: "API system for stock data",
        detail: "This is a web application that provides API for Vietcombank Digital Mobile App about stock data"
    }
]

$(function(){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      });
    var navPos = $("#menu-nav").position().top;
    var lastPos = 0;
    checkFixedWhenScroll();
    $(window).on("scroll",function(){
        checkFixedWhenScroll();
    })

    $(".link-item").each(function(){
        var cur = $(this);
        cur.on("click", function(e){
            var target = cur.data("target");
            posScroll = $("[data-link="+target+"]").offset().top - 50;
            $('html, body').animate({
                scrollTop: posScroll
            }, 500);
            highlightLink(target);
            e.preventDefault();
        });
    })
    function highlightLink(anchor) {
        $('.link-item.active').removeClass('active');
        $('.menu-link')
            .find('[data-target="' + anchor + '"]')
            .addClass('active');
    }

    $(".card-button button").on("click", function(){
        var projectId = parseInt($(this).data("project-id"));
        var project = projects[projectId];
        var htmlSlide = ""
        project.slide.forEach(img => {
            htmlSlide += `<div class="swiper-slide"><img src="${img}" alt=""></div>`
        });
        $(".swiper-slide").remove();
        $(".mySwiper .swiper-wrapper").append(htmlSlide);
        swiper.updateSlides();
        swiper.slideTo(0);
        $(".modal .title").html(project.title);
        $(".modal .sub-title").html(project.subtitle);
        $(".modal .detail").html(project.detail);


        $(".modal").addClass("visible");
        $(".overlay").addClass("visible");
    })

    $(".overlay, .close-modal").on("click", function(){
        $(".modal").removeClass("visible");
        $(".overlay").removeClass("visible");
    })

    var lastPostForm = "";
    $("#form-info").on("submit", function(e){
        var form = $(this).serialize();
        if(lastPostForm != form){
            $.ajax({
                url: 'https://formspree.io/f/xknkzvqb',
                method: 'POST',
                data: form,
                dataType: 'json'
              }).done(function(response) {
                lastPostForm = form;
                if(response.ok){
                    $(".wrap-form .noti").addClass("success");
                    $(".noti .noti-content").html("Your message was sent successfully. Thanks!");
                    $("#form-info").trigger("reset");
                }else{
                    $(".wrap-form .noti").addClass("error");
                    $(".noti .noti-content").html("Something went wrong. Please try again!");
                }
                $("#wrap-noti").addClass("expand");
              });
        }
        e.preventDefault();
    });
    $("#wrap-noti i").on("click", function(){
        $("#wrap-noti").removeClass("expand");
    })
    $(".scroll-top").on("click", function(e){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        e.preventDefault();
    })
    function checkFixedWhenScroll(){
        var pos = $(window).scrollTop();
        var pos2 = pos + 250;
        if (pos >= navPos  && lastPos < pos) {
            $("#menu-nav").addClass('sticky');
        }
        if (pos < navPos - 60 && lastPos > pos) {
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
        if (pos2 > $('#resume').offset().top) {
            highlightLink('resume');
        }
        if (pos2 > $('#contact').offset().top) {
            highlightLink('contact');
        }
    }   

    $("#button-menu").on("click", function(){
        $("#list-menu-mobile").toggleClass("visible");
    })
    $("#list-menu-mobile .link-item").on("click", function(){
        if($("#list-menu-mobile").hasClass("visible")){
            $("#list-menu-mobile").removeClass("visible");
        }
    })
})



