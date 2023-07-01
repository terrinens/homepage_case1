$(document).ready(function () {
    // items_list 반응형 대응 시작
    var windowWidth = $(window).width();

    var feat_items_img = [
        {
            items_img: 'img/feat_items/temporary_feat_items01.jpg',
            items_name: "나살치즈(Năsal)",
            items_cook: "#샐러드, 스튜, #안주, #아이간식, #샌드위치",
            items_price: "30,000원",
            items_link: "#"
        },
        {
            items_img: 'img/feat_items/temporary_feat_items02.jpg',
            items_name: "파르메잔 치즈(파마산)",
            items_cook: "스튜, #카르보나라, #파스타, #피자, #토핑류",
            items_price: "53,000원",
            items_link: "#"

        },
        {
            items_img: 'img/feat_items/temporary_feat_items03.jpg',
            items_name: "에멘탈 치즈",
            items_cook: "#샌드위치, #크래커&비스킷, 토핑류",
            items_price: "29,000원",
            items_link: "#"
        },
        {
            items_img: 'img/feat_items/temporary_feat_items04.jpg',
            items_name: "오라 치즈 (블루치즈)",
            items_cook: "#모든와인, #샌드위치, #피자, #샐러드",
            items_price: "30,000원",
            items_link: "#"
        },
        {
            items_img: 'img/feat_items/temporary_feat_items05.jpg',
            items_name: "만체고 치즈",
            items_cook: "#샐러드, #아이간식, #샌드위치, #올리브절임, #젤리, #레드와인",
            items_price: "127,000원",
            items_link: "#"
        },
        {
            items_img: 'img/feat_items/temporary_feat_items06.jpg',
            items_name: "로크포르 치즈",
            items_cook: "#샐러드, #샌드위치, #레드와인",
            items_price: "127,000원",
            items_link: "#"
        }
    ];

    function articleRESP() {
        if (windowWidth >= 1 && windowWidth <= 783) {

            $("article.feat_items_list").eq(2).hide();
            $("article.feat_items_list").eq(3).hide();

            $("article.feat_items_list").each(function (index) {
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
            });

            $("article.hotitems_list").eq(2).hide();

            $("article.hotitems_list").each(function (index) {
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
            });

        } else if (windowWidth >= 784 && windowWidth < 1024) {
            $("article.feat_items_list").eq(2).show();
            $("article.feat_items_list").eq(3).hide();

            $("article.feat_items_list").each(function (index) {
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
            });

            $("article.hotitems_list").eq(2).show();
            $("article.hotitems_list").eq(3).hide();

            $("article.hotitems_list").each(function (index) {
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
            });

        } else {
            $("article.feat_items_list").eq(3).show();

            $("article.feat_items_list").each(function (index) {
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
            });

            $("article.hotitems_list").eq(3).show();

            $("article.hotitems_list").each(function (index) {
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
            });

        }
    };

    function articleRESP2() {
        if (windowWidth >= 1 && windowWidth <= 783) {

            $("article.hotitems_list").eq(2).hide();
            $("article.hotitems_list").eq(3).hide();

            $("article.hotitems_list").each(function (index) {
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_name").text(feat_items_img[index].items_name);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_cook").text(feat_items_img[index].items_cook);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_price").text(feat_items_img[index].items_price);
            });

        } else if (windowWidth >= 784 && windowWidth < 1024) {

            $("article.hotitems_list").eq(2).show();
            $("article.hotitems_list").eq(3).hide();

            $("article.hotitems_list").each(function (index) {
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_name").text(feat_items_img[index].items_name);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_cook").text(feat_items_img[index].items_cook);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_price").text(feat_items_img[index].items_price);
            });

        } else {

            $("article.hotitems_list").eq(3).show();

            $("article.hotitems_list").each(function (index) {
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_name").text(feat_items_img[index].items_name);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_cook").text(feat_items_img[index].items_cook);
                $("article.hotitems_list").eq(index).children("div.hotitems_items_price").text(feat_items_img[index].items_price);
            });

        }
    };

    articleRESP();
    articleRESP2();

    $(window).resize(function () {
        windowWidth = $(window).width();
        articleRESP();
        articleRESP2();
    });

    // items_list 반응형 대응 끝
    // 
    // 
    // 
    // feat_items_list 버튼 시작 
    // next 버튼 버그 있으니 수정할것.
    var next_index = 0;
    $("button#next").click(function () {
        if (windowWidth <= 783) {

            $("article.feat_items_list").each(function (index) {

                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);

                if (next_index < feat_items_img.length - 1) {
                    next_index++;
                } else {
                    next_index = 0;
                }
            });
        } else if (windowWidth >= 784 && windowWidth < 1024) {

            $("article.feat_items_list").each(function (index) {

                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);

                if (next_index < feat_items_img.length - 1) {
                    next_index++;
                } else {
                    next_index = 0;
                }
            });

        } else {

            $("article.feat_items_list").each(function (index) {

                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);

                if (next_index < feat_items_img.length - 1) {
                    next_index++;
                } else {
                    next_index = 0;
                }
            });
        }
    });

    $("button#frev").click(function () {
        if (windowWidth <= 783) {
            $("article.feat_items_list").each(function (index) {
                var frev_index = index;
                if (frev_index - 1 < 0) {
                    articleRESP();
                } else {
                    frev_index -= 1;
                    $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                    $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                    $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                    $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
                }
            });
        } else if (windowWidth >= 784 && windowWidth < 1024) {
            $("article.feat_items_list").each(function (index) {
                var frev_index = index;
                if (frev_index - 1 < 0) {
                    articleRESP();
                } else {
                    frev_index -= 1;
                    $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                    $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                    $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                    $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
                }
            });
        } else {
            $("article.feat_items_list").each(function (index) {
                var frev_index = index;
                if (frev_index - 1 < 0) {
                    articleRESP();
                } else {
                    frev_index -= 1;
                    $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                    $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                    $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                    $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
                }
            });
        }
    });

    $("article.feat_items_list").click(function () {
        var index = $(this).index();
        var list_link = feat_items_img[index].items_link;
        window.location.href = list_link;
    });
    // feat_items_list 버튼 끝
    // 
    // 
    // 
    // hotitems_list 버튼 시작
    $("button#hot_next").click(function () {

        if (windowWidth <= 783) {

            $("article.hotitems_list").each(function (index) {

                var next_index = index + 1;
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);
            });
        } else if (windowWidth >= 784 && windowWidth < 1024) {

            $("article.hotitems_list").each(function (index) {

                var next_index = index + 1;
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);
            });

        } else {

            $("article.hotitems_list").each(function (index) {

                var next_index = index + 1;
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);
            });
        }
    });

    $("button#hot_frev").click(function () {
        if (windowWidth <= 783) {
            $("article.hotitems_list").each(function (index) {
                var frev_index = index - 1;
                if (frev_index < 0) {
                    frev_index = feat_items_img.length - 1;
                    articleRESP2();
                }
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
            });
        } else if (windowWidth >= 784 && windowWidth < 1024) {
            $("article.hotitems_list").each(function (index) {
                var frev_index = index - 1;
                if (frev_index < 0) {
                    frev_index = feat_items_img.length - 1;
                    articleRESP2();
                }
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
            });
        } else {
            $("article.hotitems_list").each(function (index) {
                var frev_index = index - 1;
                if (frev_index < 0) {
                    frev_index = feat_items_img.length - 1;
                    articleRESP2();
                }
                $("article.hotitems_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                $("article.hotitems_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                $("article.hotitems_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                $("article.hotitems_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
            });
        }
    });


    $("article.hotitems_list").click(function () {
        var index = $(this).index();
        var list_link = feat_items_img[index].items_link;
        window.location.href = list_link;
    });
    // hotitems_list 버튼추가 끝
    // 
    // 
    // 
    // side menu 버튼 시작
    $("button#side_menu_toggle").click(function () {
        $("div#side_menu_icon_box").toggle();
    });
    // side menu 버튼 끝
    //
    // 
    // 
    // article feat_items_list, hotitems_list 이미지 호버시 장바구니 버튼 구현
    $("div.items_quick").css("display", "none");

    $("img.items_img").each(function (index) {
        $(this).mouseenter(function () {
            $("div.items_quick").eq(index).css("display", "flex");
        });

        $("div.items_quick").mouseleave(function () {
            $("div.items_quick").eq(index).css("display", "none");
        });
    });

    $("div.items_quick_hotitems").css("display", "none");

    $("img.items_img_hotitems").each(function (index) {
        $(this).mouseenter(function () {
            $("div.items_quick_hotitems").eq(index).css("display", "flex");
        });

        $("div.items_quick_hotitems").mouseleave(function () {
            $("div.items_quick_hotitems").eq(index).css("display", "none");
        });
    });
    // article feat_items_list, hotitems_list 이미지 호버시 장바구니 버튼 구현 끝
    //
    // 
    // 
    // event_banner_box 슬라이드 애니메이션 추가 시작
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
                $(banner2).animate({ width: "100%" }, { duration: 2000 }),
                $(banner1).animate({ width: "0%" }, { duration: 2000 })
            ).done(function () {
                $(banner1).css({ display: "none" });
                setTimeout(banner_img_slide, 7000);
            });
        } else {
            banner1.css({ display: "block" });

            $.when(
                $(banner1).animate({ width: "100%" }, { duration: 2000 }),
                $(banner2).animate({ width: "0%" }, { duration: 2000 })
            ).done(function () {
                $(banner2).css({ display: "none" });
                setTimeout(banner_img_slide, 7000);
            });
        };
    }

    setTimeout(banner_img_slide, 7000);
    // event_banner_box 슬라이드 애니메이션 추가 끝
});