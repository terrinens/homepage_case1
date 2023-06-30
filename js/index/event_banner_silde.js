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

    var banner = $("img#banner_img2");

    $("img#banner_img").attr("src", banner_img[0].img);
    $("img#banner_img2").attr("src", banner_img[1].img);
    $("#banner_img2").css({ display: "none", width: "0%" });

    function switch_banner() {
        if ($(banner).is("img#banner_img2")) {
            console.log("img 1로 변경");
                $("img#banner_img1").css({ display: "none", width: "0%" });
            banner = $("img#banner_img");
        } else {
            console.log("img 2로 변경");
                $("img#banner_img2").css({ display: "none", width: "0%" });
            banner = $("img#banner_img2");
        }
        setTimeout(banner_img_slide, 5000);
    }

    function banner_img_slide() {
        $(banner).css({
            display: "block",
            left: "0px"
        });

        $(banner).animate(
            {
                width: "100%"
            },
            {
                duration: 2000,
                complete: switch_banner
            }
        );
    }

    banner_img_slide();
});
