
// 获取用户名
var user = document.getElementById('user')

// 获取退出登录
var quit = document.getElementById('quit')


// 获取Cookie 里面存放的账号
var phone_1 = getCookie('phone')

if (getCookie('phone')) {
    user.innerHTML = `欢迎您！${getCookie('phone')}`
}

quit.onclick = function () {
    if (user.innerHTML.length > 3) {
        var affirm = confirm('您确定要退出登录吗？')
        if (affirm) {
            clearCookie()
            location.href = './my.html'
        }
    } else {
        alert('您还未登录！！！')
    }

}