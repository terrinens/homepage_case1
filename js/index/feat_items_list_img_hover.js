// 발표때 넣을부분 | 마우스 호버시 계속 깜빡이듯이 적용되던 현상
// 원인은 div.itmes_quick이 display flex값을 가질경우 img를 가리기 때문에 마우스는 img를 떠난것으로 취급 되기 때문이였음.
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
        $(this).mouseenter(function () {
            $("div.items_quick").eq(index).css("display", "flex");
        });

        $("div.items_quick").mouseleave(function () {
            $("div.items_quick").eq(index).css("display", "none");
        });
    });
});
