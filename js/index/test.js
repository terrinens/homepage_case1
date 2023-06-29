$("button#next").click(function () {

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

$("button#frev").click(function () {
    if (windowWidth <= 783) {
        $("article.hotitems_list").each(function (index) {
            var frev_index = index - 1;
            if (frev_index < 0) {
                articleRESP();
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
                articleRESP();
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
                articleRESP();
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