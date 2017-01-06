function showAlertBox(message, time, callback) {
    $('<div class="shadow"><div class="alertBox"><span class="alertMsg"></span></div></div>').appendTo('body');
    $('.alertMsg').text(message);
    var alertBox = $('.alertBox');
    var mhx = (window.innerHeight - alertBox.height()) / 2;
    alertBox.css('marginTop', mhx);
    setTimeout(function () {
        $('.shadow').remove();
        $('.contentText').empty();
        if (typeof callback == "function") {
            callback();
        }
    }, time || 2000);
}

function showConfirmBox(message, title, btnOk, btnCancel, okCallback, cancelCallback) {
    $('<div class="shadow">' +
        '<div class="confirmBox">' +
        '<div class="contentBox">' +
        '<span class="confirmTitle"></span>' +
        '<span class="confirmMsg"></span>' +
        '</div><div class="okBtn"></div>' +
        '<div class="cancelBtn"></div></div></div>').appendTo('body');
    $('.confirmMsg').text(message);
    $('.confirmTitle').text(title || "提示");
    var shadow = $('.shadow');
    var confirmBox = $('.confirmBox');
    var mh = (window.innerHeight - confirmBox.height()) / 2;
    confirmBox.css('marginTop', mh);

    $('.okBtn').text(btnOk || "确定").click(function () {
        shadow.remove();
        typeof okCallback == "function" ? okCallback() : null;
    });

    $('.cancelBtn').text(btnCancel || "取消").click(function () {
        shadow.remove();
        typeof cancelCallback == "function" ? cancelCallback() : null;
    });
}