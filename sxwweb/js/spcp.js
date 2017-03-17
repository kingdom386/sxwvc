/**
 * Created by xiezh on 2015/7/27.
 */

//列表点击事件
$(function () {
    //悬浮事件
    $(".index-spCp").hover(
        function () {
            $(".index-cp").show();
            $(".index-head .index-head-mid .index-head-mid-searchBox .i-head-mid-sList .s-list .index-spCp").css({borderLeft: "1px solid #eee", borderBottom: "1px solid #eee"});
            $(".arrow").addClass("up-arrow").removeClass("down-arrow")
        }
        ,
        function () {
            $(".index-cp").hide();
            $(".index-head .index-head-mid .index-head-mid-searchBox .i-head-mid-sList .s-list .index-spCp").css({borderLeft: "1px solid transparent", borderBottom: "1px solid transparent"});
            $(".arrow").addClass("down-arrow").removeClass("up-arrow")
        }
    );

    //点击事件

    $(".s-list .index-spCp a ").click(function () {
    $(".index-cp").hide();
    //获取值
    var spHtmVal = $(".index-sp").html();
    var cpHtmVal = $(".index-cp").html();
    var curVal = $(this).html();
    //交换变量值
    if ((curVal == "商品") && (curVal == spHtmVal)) {
    //do nothing
    } else {
    change(cpHtmVal, spHtmVal);
    }

    });

    function change(cpHtmVal, spHtmVal) {
    var midVal = "";
    midVal = cpHtmVal
    cpHtmVal = spHtmVal;
    spHtmVal = midVal;
    $(".index-sp").html(spHtmVal);
    $(".index-cp").html(cpHtmVal);
    }
    });


