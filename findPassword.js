
// 获取 手机号
var phone = document.getElementById('phone')
// 获取 发送验证码
var code = document.getElementById('code')
// 获取 短信中的验证码
var auth = document.getElementById('auth')
// 获取 新密码
var pass = document.getElementById('pass')
// 获取 确认新密码
var newpass = document.getElementById('newpass')
// 获取 提交
var put = document.getElementById('put')

// 获取Cookie 里面存放的账号
var phone_1 = getCookie('phone')
// 获取Cookie 里面存放的密码
var pass_ = getCookie('newpass')

if (getCookie('phone')) {
    phone.value = getCookie('phone')
}

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

//  密码正则
var pass_z = /^\d{6,12}$/


// 提示文本部分
var verify_text = document.getElementById('verify-text')
var pass_text = document.getElementById('pass_text')
var pass_text_1 = document.getElementById('pass_text_1')


// 验证码===========
auth.onfocus = function () {
    verify_text.style.display = 'block'
}
auth.onblur = function () {
    if (auth.value == str && auth.value != '') {
        verify_text.innerHTML = '输入正确'
        verify_text.style.color = 'green'
    } else {
        verify_text.innerHTML = '输入有误'
        verify_text.style.color = 'red'
        verify_text.style.display = 'block'
    }
    verify_text.style.display = 'none'
}
auth.oninput = function () {
    verify_text.style.display = 'none'
}

// 密码 ==========
pass.onfocus = function () {
    pass_text.style.display = 'block'
}
pass.onblur = function () {
    if (pass_z.test(pass.value)) {
        pass_text.innerHTML = '输入正确'
        pass_text.style.color = 'green'
    } else {
        pass_text.innerHTML = '输入有误'
        pass_text.style.color = 'red'
        pass_text.style.display = 'block'
    }
    pass_text.style.display = 'none'
}
pass.oninput = function () {
    pass_text.style.display = 'none'
}

// 确认密码
newpass.onfocus = function () {
    pass_text_1.style.display = 'block'
}
newpass.onblur = function () {
    if (newpass.value == pass.value && pass_z.test(newpass.value)) {
        pass_text_1.innerHTML = '输入正确'
        pass_text_1.style.color = 'green'
    } else {
        pass_text_1.innerHTML = '输入有误'
        pass_text_1.style.color = 'red'
        pass_text_1.style.display = 'block'
    }
    pass_text_1.style.display = 'none'
}
newpass.oninput = function () {
    pass_text_1.style.display = 'none'
}


//  提交

put.onclick = function () {
    if (phone.value == phone_1 && (auth.value == str && auth.value != '') && (pass_z.test(pass.value)) && (newpass.value == pass.value && pass_z.test(newpass.value))) {
        alert('密码修改成功')
        setCookie('newpass', newpass.value)
        location.href = './login.html'
    } else {
        alert('信息填写有误，请查看后重新填写！')
    }
}