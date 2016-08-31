jQuery.fn.showMenu = function (showobj,timeout,speed) {
    timeout = timeout ? timeout : 100;
    //延时计数器
    var timer = null;
    //菜单对象
    var jqShowObj = $(showobj);
    var sender = $(this);
    //隐藏菜单
    jqShowObj.hide();
    //菜单显示的状态
    var display = false;
    //****显示菜单方法开始****//
    var showMenu = function () {
        //如果菜单为显示则退出操作
        if (display) {
            return false;
        }
        //sender.addClass("hover");
        jqShowObj.show();
        display = true;
        //鼠标移入
        jqShowObj.mouseover(function () {
            clearTimeout(timer);
        });
        //鼠标移开
        jqShowObj.mouseout(function () {
            hideMenu();
        });
    };
    //****显示菜单方法结束****//
    //****隐藏菜单方法开始****//
    var hideMenu = function () {
        clearTimeout(timer);
        //延时隐藏菜单
        timer = setTimeout(function () {
            //显示边框
            //sender.removeClass("hover");
            jqShowObj.hide();
            display = false;
        }, timeout);
    };
    //****隐藏菜单方法结束****//
    //绑定按钮鼠标经过事件
    sender.hover(function (e) {
        //延时显示菜单
        clearTimeout(timer);        
        timer = setTimeout(function () {
            showMenu();
        }, timeout);
    }, function () {
        clearTimeout(timer);
        //鼠标离开按钮时，如果菜单还是显示状态则隐藏
        if (display) {
            timer = setTimeout(function () {                
                hideMenu();
            }, timeout);
        }
    });
};


