function showAlertBox(message, time, callback) {
    $('<div class="shadow"><div class="tipBox1"><span class="contentText"></span></div></div>').appendTo('body');
    $('.contentText').text(message);
    var hh = window.innerHeight;
    var shadow = $('.shadow');
    var tipBox = $('.tipBox1');
    var thx = tipBox.height();
    var mhx = (hh - thx) / 2;
    tipBox.css('marginTop', mhx);
    setTimeout(function () {
        shadow.remove();
        $('.contentText').empty();
        if (typeof callback == "function") {
            callback();
        }
    }, time || 2000);
}

function showConfirmBox(message, title, btnOk, btnCancel, okCallback, cancelCallback) {
    $('<div class="shadow">' +
        '<div class="tipBox2">' +
        '<div class="contentBox">' +
        '<span class="titleTs"></span>' +
        '<span class="contentTs"></span>' +
        '</div><div class="okBtn"></div>' +
        '<div class="cancelBtn"></div></div></div>').appendTo('body');

    var hh = window.innerHeight;
    var shadow = $('.shadow');
    var tipBox = $('.tipBox2');
    var okBtn = $('.okBtn');
    var cancelBtn = $('.cancelBtn');
    var th = tipBox.height();
    var mh = (hh - th) / 2;
    okBtn.text(btnOk || "确定");
    cancelBtn.text(btnCancel || "取消");
    $('.contentTs').text(message);
    $('.titleTs').text(title || "提示");
    tipBox.css('marginTop', mh);

    okBtn.click(function () {
        shadow.remove();
        typeof okCallback == "function" ? okCallback() : null;
    });

    cancelBtn.click(function () {
        shadow.remove();
        typeof cancelCallback == "function" ? cancelCallback() : null;
    });
}