var projects = [
    {
        slide : [
            "images/projects/naij/naij1.png",
            "images/projects/naij/naij2.png",
            "images/projects/naij/naij3.png"
        ],
        title : "Naij Auto",
        subtitle: "Auto Portal to Buy and Sell Cars Online in Nigeria",
        detail: ""
    },
    {
        slide : [
            "images/projects/dvg.jpg",
        ],
        title : "DaiViet Group Internal Software",
        subtitle: "Human Resource Management",
        detail: ""
    },
    {
        slide : [
            "images/projects/vcbs/vcbs1.jpg",
        ],
        title : "Vietcombank Stock API",
        subtitle: "API system for stock data",
        detail: ""
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
        cur.on("click", function(){
            var target = cur.data("target");
            posScroll = $("[data-link="+target+"]").offset().top - 50;
            $('html, body').animate({
                scrollTop: posScroll
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
        console.log(project);
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
        // if (pos2 > $('#contact').offset().top) {
        //     highlightLink('contact');
        // }
    }   
})


var formData = {
    name:"KienLK",
    phone:"0373964438"
}
// $.ajax({
//     url: 'https://formspree.io/f/xknkzvqb',
//     method: 'POST',
//     data: { 
//         name:"KienLK",
//         phone:"0373964438"
//     },
//     dataType: 'json'
//   }).done(function(response) {
//     console.log(response);
//     console.log("success");
//   });

