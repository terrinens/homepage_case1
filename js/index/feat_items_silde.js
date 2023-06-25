$(document).ready(function () {

    var windowWidth = $(window).width();
    let list1 = 0; let list2 = 1; let list3 = 2; let list4 = 3;

    var feat_items_img = [
        {
            items_img: './img/feat_items/temporary_feat_items01.jpg',
            items_name: "나살치즈(Năsal)",
            items_cook: "#샐러드, 스튜, #안주, #아이간식, #샌드위치",
            items_price: "30,000원"
        },
        {
            items_img: './img/feat_items/temporary_feat_items02.jpg',
            items_name: "파르메잔 치즈(파마산)",
            items_cook: "스튜, #카르보나라, #파스타, #피자, #토핑류",
            items_price: "53,000원"
        },
        {
            items_img: './img/feat_items/temporary_feat_items03.jpg',
            items_name: "에멘탈 치즈",
            items_cook: "#샌드위치, #크래커&비스킷, 토핑류",
            items_price: "29,000원"
        },
        {
            items_img: './img/feat_items/temporary_feat_items04.jpg',
            items_name: "오라 치즈 (블루치즈)",
            items_cook: "#모든와인, #샌드위치, #피자, #샐러드",
            items_price: "30,000원"
        },
        {
            items_img: './img/feat_items/temporary_feat_items05.jpg',
            items_name: "만체고 치즈",
            items_cook: "#샐러드, #아이간식, #샌드위치, #올리브절임, #젤리, #레드와인",
            items_price: "127,000원"
        },
    ];

    // 이부분을 frontend 발표때 넣을것
    // 반응형을 대응한 창 갯수 조절
    function articleRESP() {
        if (windowWidth <= 783) {

            $("article.feat_items_list").eq(2).hide();

            $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1].items_img);
            $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2].items_img);

            $("article.feat_items_list").eq(0).children("div.items_name").text(feat_items_img[list1].items_name);
            $("article.feat_items_list").eq(1).children("div.items_name").text(feat_items_img[list2].items_name);

            $("article.feat_items_list").eq(0).children("div.items_cook").text(feat_items_img[list1].items_cook);
            $("article.feat_items_list").eq(1).children("div.items_cook").text(feat_items_img[list2].items_cook);

            $("article.feat_items_list").eq(0).children("div.items_price").text(feat_items_img[list1].items_price);
            $("article.feat_items_list").eq(1).children("div.items_price").text(feat_items_img[list2].items_price);

        } else if (windowWidth >= 784 && windowWidth < 1024) {
            $("article.feat_items_list").eq(2).show();
            $("article.feat_items_list").eq(3).hide();

            $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1].items_img);
            $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2].items_img);
            $("article.feat_items_list").eq(2).children("img").attr("src", feat_items_img[list3].items_img);

            $("article.feat_items_list").eq(0).children("div.items_name").text(feat_items_img[list1].items_name);
            $("article.feat_items_list").eq(1).children("div.items_name").text(feat_items_img[list2].items_name);
            $("article.feat_items_list").eq(2).children("div.items_name").text(feat_items_img[list3].items_name);

            $("article.feat_items_list").eq(0).children("div.items_cook").text(feat_items_img[list1].items_cook);
            $("article.feat_items_list").eq(1).children("div.items_cook").text(feat_items_img[list2].items_cook);
            $("article.feat_items_list").eq(2).children("div.items_cook").text(feat_items_img[list3].items_cook);

            $("article.feat_items_list").eq(0).children("div.items_price").text(feat_items_img[list1].items_price);
            $("article.feat_items_list").eq(1).children("div.items_price").text(feat_items_img[list2].items_price);
            $("article.feat_items_list").eq(2).children("div.items_price").text(feat_items_img[list3].items_price);

        } else {
            $("article.feat_items_list").eq(3).show();

            $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1].items_img);
            $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2].items_img);
            $("article.feat_items_list").eq(2).children("img").attr("src", feat_items_img[list3].items_img);
            $("article.feat_items_list").eq(3).children("img").attr("src", feat_items_img[list4].items_img);

            $("article.feat_items_list").eq(0).children("div.items_name").text(feat_items_img[list1].items_name);
            $("article.feat_items_list").eq(1).children("div.items_name").text(feat_items_img[list2].items_name);
            $("article.feat_items_list").eq(2).children("div.items_name").text(feat_items_img[list3].items_name);
            $("article.feat_items_list").eq(3).children("div.items_name").text(feat_items_img[list4].items_name);

            $("article.feat_items_list").eq(0).children("div.items_cook").text(feat_items_img[list1].items_cook);
            $("article.feat_items_list").eq(1).children("div.items_cook").text(feat_items_img[list2].items_cook);
            $("article.feat_items_list").eq(2).children("div.items_cook").text(feat_items_img[list3].items_cook);
            $("article.feat_items_list").eq(3).children("div.items_cook").text(feat_items_img[list4].items_cook);

            $("article.feat_items_list").eq(0).children("div.items_price").text(feat_items_img[list1].items_price);
            $("article.feat_items_list").eq(1).children("div.items_price").text(feat_items_img[list2].items_price);
            $("article.feat_items_list").eq(2).children("div.items_price").text(feat_items_img[list3].items_price);
            $("article.feat_items_list").eq(3).children("div.items_price").text(feat_items_img[list4].items_price);
        }
    };

    articleRESP();

    // window의 사이즈가 달라질때마다 함수를 다시 불러온다.
    $(window).resize(function () {
        windowWidth = $(window).width();
        articleRESP();
    });

    // 클릭시 상품의 정보가 변경된다.
    $("button#next").click(function () {
        ++list1; ++list2; ++list3; ++list4;

        if (windowWidth <= 783) {

            if (list3 >= feat_items_img.length) {
                list1 = 0; list2 = 1;
            };
            $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1].items_img);
            $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2].items_img);

            $("article.feat_items_list").eq(0).children("div.items_name").text(feat_items_img[list1].items_name);
            $("article.feat_items_list").eq(1).children("div.items_name").text(feat_items_img[list2].items_name);

            $("article.feat_items_list").eq(0).children("div.items_cook").text(feat_items_img[list1].items_cook);
            $("article.feat_items_list").eq(1).children("div.items_cook").text(feat_items_img[list2].items_cook);

            $("article.feat_items_list").eq(0).children("div.items_price").text(feat_items_img[list1].items_price);
            $("article.feat_items_list").eq(1).children("div.items_price").text(feat_items_img[list2].items_price);

        } else if (windowWidth >= 784 && windowWidth < 1024) {

            if (list3 >= feat_items_img.length) {

                list1 = 0; list2 = 1, list3 = 2;
            }

            $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1].items_img);
            $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2].items_img);
            $("article.feat_items_list").eq(2).children("img").attr("src", feat_items_img[list3].items_img);

            $("article.feat_items_list").eq(0).children("div.items_name").text(feat_items_img[list1].items_name);
            $("article.feat_items_list").eq(1).children("div.items_name").text(feat_items_img[list2].items_name);
            $("article.feat_items_list").eq(2).children("div.items_name").text(feat_items_img[list3].items_name);

            $("article.feat_items_list").eq(0).children("div.items_cook").text(feat_items_img[list1].items_cook);
            $("article.feat_items_list").eq(1).children("div.items_cook").text(feat_items_img[list2].items_cook);
            $("article.feat_items_list").eq(2).children("div.items_cook").text(feat_items_img[list3].items_cook);

            $("article.feat_items_list").eq(0).children("div.items_price").text(feat_items_img[list1].items_price);
            $("article.feat_items_list").eq(1).children("div.items_price").text(feat_items_img[list2].items_price);
            $("article.feat_items_list").eq(2).children("div.items_price").text(feat_items_img[list3].items_price);

        } else {

            if (list4 >= feat_items_img.length) {

                list1 = 0; list2 = 1, list3 = 2, list4 = 3;
            }

            $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1].items_img);
            $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2].items_img);
            $("article.feat_items_list").eq(2).children("img").attr("src", feat_items_img[list3].items_img);
            $("article.feat_items_list").eq(3).children("img").attr("src", feat_items_img[list4].items_img);

            $("article.feat_items_list").eq(0).children("div.items_name").text(feat_items_img[list1].items_name);
            $("article.feat_items_list").eq(1).children("div.items_name").text(feat_items_img[list2].items_name);
            $("article.feat_items_list").eq(2).children("div.items_name").text(feat_items_img[list3].items_name);
            $("article.feat_items_list").eq(3).children("div.items_name").text(feat_items_img[list4].items_name);

            $("article.feat_items_list").eq(0).children("div.items_cook").text(feat_items_img[list1].items_cook);
            $("article.feat_items_list").eq(1).children("div.items_cook").text(feat_items_img[list2].items_cook);
            $("article.feat_items_list").eq(2).children("div.items_cook").text(feat_items_img[list3].items_cook);
            $("article.feat_items_list").eq(3).children("div.items_cook").text(feat_items_img[list4].items_cook);

            $("article.feat_items_list").eq(0).children("div.items_price").text(feat_items_img[list1].items_price);
            $("article.feat_items_list").eq(1).children("div.items_price").text(feat_items_img[list2].items_price);
            $("article.feat_items_list").eq(2).children("div.items_price").text(feat_items_img[list3].items_price);
            $("article.feat_items_list").eq(3).children("div.items_price").text(feat_items_img[list4].items_price);
        }
    });
});

