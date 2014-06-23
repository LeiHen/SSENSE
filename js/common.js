// JavaScript Document

//焦点图文字居中
function imgTextC() {
    var $img = $(".banner>img");
    var imgH = $img.height();
    var imgW = $img.width();
    $(".banner .bannerWord").height(imgH).width(imgW);
    // $(".banner .bannerWord");
    // $(".banner a").height(imgH);

    var $imgUlImg = $(".imageUl li>img");
    var $imgUlImgA = $(".imageUl li a");
    var $imgUlBan = $(".imageUl li .bannerWord");
    for (var i = 0; i < $imgUlImg.length; i++) {
        var h = $imgUlImg.get(i).offsetHeight;
        var w = $imgUlImg.get(i).offsetWidth;
        var imgUlPS = $imgUlImg.get(i).previousSibling;

        if (imgUlPS.nodeType != 1) {
            imgUlPS = imgUlPS.previousSibling
        }

        imgUlPS.style.width = w + "px";
        imgUlPS.style.height = h + "px";

        $imgUlImgA.get(i).style.width = w + "px";
        $imgUlImgA.get(i).style.height = h + "px";

        $imgUlBan.get(i).style.width = w + "px";
        $imgUlBan.get(i).style.height = h + "px";


        // $imgBan.get(i).style.cssText                  += ";width:" + w + "px;height:" + h + "px;";
        // $imgBan.get(i).style.cssText                  = "width:" + w + "px;height:" + h + "px;";
        console.log('xxx');

    }

}