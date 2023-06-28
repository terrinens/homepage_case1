// $(document).ready(function () {
//     $("div.items_quick").css("display", "none");

//     $("img.items_img").each(function (index) {
//         $(this).hover(
//             function () {
//                 $("div.items_quick").eq(index).css("display", "flex");
//             },
//             function () {
//                 $("div.items_quick").eq(index).css("display", "none");
//             }
//         );
//     });
// });


$(document).ready(function () {
    $("div.items_quick").css("display", "none");

    $("img.items_img").each(function (index) {
        $(this).hover(
            function () {
                if ($("div.items_quick").eq(index).css("display") !== "flex") {
                    $("div.items_quick").eq(index).css("display", "flex");
                    console.log("배열 방 번호:", index);
                }
            },
            function () {
                $("div.items_quick").eq(index).css("display", "none");
                console.log("배열 방 번호:", index);
            }
        );
    });
});
