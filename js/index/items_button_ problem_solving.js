$(document).ready(function () {
    // feat_items_list 버튼추가 및 반응형 대응 시작
    var windowWidth = $(window).width();

    var feat_items_img = [
        {
            items_img: './img/feat_items/temporary_feat_items01.jpg',
            items_name: "나살치즈(Năsal)",
            items_cook: "#샐러드, 스튜, #안주, #아이간식, #샌드위치",
            items_price: "30,000원",
            items_link: "#"
        },
        {
            items_img: './img/feat_items/temporary_feat_items02.jpg',
            items_name: "파르메잔 치즈(파마산)",
            items_cook: "스튜, #카르보나라, #파스타, #피자, #토핑류",
            items_price: "53,000원",
            items_link: "#"

        },
        {
            items_img: './img/feat_items/temporary_feat_items03.jpg',
            items_name: "에멘탈 치즈",
            items_cook: "#샌드위치, #크래커&비스킷, 토핑류",
            items_price: "29,000원",
            items_link: "#"
        },
        {
            items_img: './img/feat_items/temporary_feat_items04.jpg',
            items_name: "오라 치즈 (블루치즈)",
            items_cook: "#모든와인, #샌드위치, #피자, #샐러드",
            items_price: "30,000원",
            items_link: "#"
        },
        {
            items_img: './img/feat_items/temporary_feat_items05.jpg',
            items_name: "만체고 치즈",
            items_cook: "#샐러드, #아이간식, #샌드위치, #올리브절임, #젤리, #레드와인",
            items_price: "127,000원",
            items_link: "#"
        },
    ];

    function articleRESP() {
        if (windowWidth <= 783) {

            $("article.feat_items_list").eq(2).hide();

            $("article.feat_items_list").each(function (index) {
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
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

        } else {
            $("article.feat_items_list").eq(3).show();

            $("article.feat_items_list").each(function (index) {
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[index].items_price);
            });
        }
    };

    articleRESP();

    $(window).resize(function () {
        windowWidth = $(window).width();
        articleRESP();
    });

    $("button#next").click(function () {

        if (windowWidth <= 783) {

            $("article.feat_items_list").each(function (index) {

                var next_index = index + 1;
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);
            });
        } else if (windowWidth >= 784 && windowWidth < 1024) {

            $("article.feat_items_list").each(function (index) {

                var next_index = index + 1;
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);
            });

        } else {

            $("article.feat_items_list").each(function (index) {

                var next_index = index + 1;
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[next_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[next_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[next_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[next_index].items_price);
            });
        }
    });

    $("button#frev").click(function () {
        if (windowWidth <= 783) {
            $("article.feat_items_list").each(function (index) {
                var frev_index = index - 1;
                if (frev_index < 0) {
                    articleRESP();
                }
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
            });
        } else if (windowWidth >= 784 && windowWidth < 1024) {
            $("article.feat_items_list").each(function (index) {
                var frev_index = index - 1;
                if (frev_index < 0) {
                    articleRESP();
                }
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
            });
        } else {
            $("article.feat_items_list").each(function (index) {
                var frev_index = index - 1;
                if (frev_index < 0) {
                    articleRESP();
                }
                $("article.feat_items_list").eq(index).children("img").attr("src", feat_items_img[frev_index].items_img);
                $("article.feat_items_list").eq(index).children("div.items_name").text(feat_items_img[frev_index].items_name);
                $("article.feat_items_list").eq(index).children("div.items_cook").text(feat_items_img[frev_index].items_cook);
                $("article.feat_items_list").eq(index).children("div.items_price").text(feat_items_img[frev_index].items_price);
            });
        }
    });


    $("article.feat_items_list").click(function () {
        var index = $(this).index();
        var list_link = feat_items_img[index].items_link;
        window.location.href = list_link;
    });
    // feat_items_list 버튼추가 및 반응형 대응 끝

    //

});