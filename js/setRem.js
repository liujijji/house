//   加节流 

var flg = true

function setRem() {
    var ui_w = 375;
    if (flg) {
        flg = false // 获取屏幕的宽度

        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

        clientWidth = clientWidth > 600 ? 600 : clientWidth
        clientWidth = clientWidth < 350 ? 350 : clientWidth

        // 通过js动态改变html根节点字体大小
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
        setTimeout(function() {
            flg = true
        }, 100)
    }
}
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;
setRem()