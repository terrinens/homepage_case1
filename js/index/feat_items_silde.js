$(document).ready(function () {

    var feat_items_img = [
        '/img/temporary_feat_items01.jpg',
        '/img/temporary_feat_items02.jpg',
        '/img/temporary_feat_items03.jpg',
        '/img/temporary_feat_items04.jpg',
        '/img/temporary_feat_items05.jpg',
    ];

    let list1 = 0; let list2 = 1; let list3 = 2; let list4 = 3;

    $("button#next").click(function () {
        ++list1; ++list2; ++list3; ++list4;

        if (list4 >= feat_items_img.length) {
            list1 = 0; list2 = 1; list3 = 2; list4 = 3;
        };

        $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1]);
        $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2]);
        $("article.feat_items_list").eq(2).children("img").attr("src", feat_items_img[list3]);
        $("article.feat_items_list").eq(3).children("img").attr("src", feat_items_img[list4]);
    });

    $("article.feat_items_list").eq(0).children("img").attr("src", feat_items_img[list1]);
    $("article.feat_items_list").eq(1).children("img").attr("src", feat_items_img[list2]);
    $("article.feat_items_list").eq(2).children("img").attr("src", feat_items_img[list3]);
    $("article.feat_items_list").eq(3).children("img").attr("src", feat_items_img[list4]);

});

