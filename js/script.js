$(document).ready(function () {



    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });




    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
    $("#form_tel,#form_tel2,.steps_tel").mask("+7 99-999-99-99");

    var scene1 = document.getElementById('scene-1');
    var parallax = new Parallax(scene1, {
        limitX: 0
    });
    var scene2 = document.getElementById('scene-2');
    var parallax = new Parallax(scene2, {
        limitX: 0
    });
    var scene3 = document.getElementById('scene-3');
    var parallax = new Parallax(scene3, {
        limitX: 0
    });
    var scene4 = document.getElementById('scene-4');
    var parallax = new Parallax(scene4, {
        limitX: 0
    });
    var scene5 = document.getElementById('scene-5');
    var parallax = new Parallax(scene5, {
        limitX: 0
    });
    var scene6 = document.getElementById('scene-6');
    var parallax = new Parallax(scene6, {
        limitX: 0
    });
    var scene7 = document.getElementById('scene-7');
    var parallax = new Parallax(scene7, {
        limitX: 0
    });

    var scene8 = document.getElementById('scene-8');
    var parallax = new Parallax(scene8, {
        limitX: 0
    });
    $('.popular_food_slider').slick({
        arrows: false
    })
    $('.popular_food_slider_button.left').click(function () {
        $('.popular_food_slider').slick("slickPrev");
    })
    $('.popular_food_slider_button.right').click(function () {
        $('.popular_food_slider').slick("slickNext");
    })
    $('.sixth_screen_content_right').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta * 50);
        e.preventDefault();
    });
    $(".portfolio_items_wrapper").not(":first").hide(300)
    $(".portfolio_items_wrapper:first").addClass("active");
    $(".portfolio_tab_nav li").click(function () {
        $(".portfolio_tab_nav li").eq($(this).index()).addClass("active");
        $(".portfolio_items_wrapper").hide().eq($(this).index()).fadeIn().addClass('active').siblings().removeClass('active');
        $(this).siblings().removeClass('active  ')
    }).eq(0).addClass("active");
    $('.seventh_screen_row_sliders_item').slick({
        slidesToShow: 1,
        nextArrow: '<button class="arrow icon-chevron-left"></button>',
        prevArrow: '<button class="arrow icon-chevron-right"></button>'
    })

    $('.sert_gallery').slick({
        slidesToShow: 5,
        nextArrow: '<button class="arrow icon-chevron-left"></button>',
        prevArrow: '<button class="arrow icon-chevron-right"></button>'
    })

});

