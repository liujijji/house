function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth
        // client_w = client_w < 375 ? 375 : client_w
        // client_w = client_w < 300 ? 300 : client_w
    var html_ = document.getElementsByTagName('body')[0]
    html_.style.fontSize = (client_w / ui_w) * 10 + 'px'
}

var timer = null;
window.onresize = function() {
    clearTimeout(timer)
    timer = setTimeout(setRem, 300)
}
window.onload = setRem;
setRem();