// JavaScript Document
function mouseSelect(container, senderEle, selectCss, defaultCss, targetEle) {
    container = $(container);
    senderEle = container.find(senderEle);
    targetEle = container.find(targetEle);

    senderEle.mouseover(function() {
        index = senderEle.index(this);
        container.find(senderEle + "[class=" + selectCss + "]").removeClass().addClass(defaultCss);
        $(this).removeClass().addClass(selectCss);
        targetEle.css("display", "none").eq(index).css("display", "block");
    }).eq(0).mouseover();
}