
// 获取普通登录数据================================

// 获取手机号码
var phone_ = document.getElementById('phone')
// 获取密码
var pass = document.getElementById('pass')
// 立即登录
var ljdl_1 = document.getElementById('ljdl_1')

// 获取Cookie 里面存放的账号
var phone_1 = getCookie('phone')
// 获取Cookie 里面存放的密码
var pass_ = getCookie('newpass')

if (getCookie('phone')) {
    phone_.value = getCookie('phone')
}

ljdl_1.onclick = function () {
    if ((phone_.value == phone_1) && (pass.value == pass_)) {
        alert('登录成功！')
        setCookie('sign', true)
        location.href = './index.html'
    } else {
        alert('手机号或密码有误！')
    }
}


// 获取验证码登录数据================================

// 获取验证码手机号码
var phone_2 = document.getElementById('phone_2')
// 获取发送验证码
var code = document.getElementById('code')
// 获取验证短信
var auth = document.getElementById('auth')
// 获取验证并登录
var code_login = document.getElementById('code_login')

var str = 0
var num = 60
var timer

code.onclick = function () {
    clearInterval(timer)
    timer = setInterval(() => {
        num--
        code.innerHTML = `(${num})秒后重发`
        if (num == 57) {
            str = Math.round(Math.random() * 10000)
            str > 1000 ? str : str += 1000
            alert('本轮验证码为：' + str)
        } else if (num == 0) {
            code.innerHTML = '发送验证码'
            clearInterval(timer)
            num = 60
        }
    }, 1000);
}

code_login.onclick = function () {
    if (phone_2.value == phone_1 && auth.value == str && auth.value != '') {
        alert('登录成功！')
        setCookie('sign', true)
        location.href = './index.html'
    } else {
        alert('手机号或验证码有误！')
    }
}



// 判断是否登录，跳转不同的页面

var is_n = document.getElementById('is_n')

is_n.onclick = function () {
    if (getCookie('sign')) {
        location.href = './myLogin.html'
    } else {
        location.href = './my.html'
    }
}