$(document).ready(function () {
    var banner_img = [
        {
            img: "img/event_banner/event_banner01.jpg",
            link: "#"
        },
        {
            img: "img/event_banner/event_banner02.jpg",
            link: "#"
        },
        {
            img: "img/event_banner/event_banner03.jpg",
            link: "#"
        }
    ];

    var banner1 = $("img#banner_img");
    var banner2 = $("img#banner_img2");

    let banner_img_arr1 = 0;
    let banner_img_arr2 = 1;

    banner1.attr("src", banner_img[banner_img_arr1].img);
    banner2.attr("src", banner_img[banner_img_arr2].img);

    function banner_img_slide() {

        if (banner2.css("display") == "none") {
            banner2.css({ display: "block" });

            $.when(
                $(banner2).animate({width: "100%"}, {duration: 2000}),
                $(banner1).animate({width: "0%"}, {duration: 2000})
            ) .done (function () {
                $(banner1).css({display: "none"});
                setTimeout(banner_img_slide, 7000);
            });
        } else {
            banner1.css({ display: "block" });

            $.when(
                $(banner1).animate({width: "100%"}, {duration: 2000}),
                $(banner2).animate({width: "0%"}, {duration: 2000})
            ) .done (function () {
                $(banner2).css({display: "none"});
                setTimeout(banner_img_slide, 7000);
            });
        };
    }

    setTimeout(banner_img_slide, 7000);
});
