
//  手机号=====================================

// 手机号正则
var phone_z = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
// 获取手机号
var phone = document.getElementById('phone')
// 手机号提示框
var phone_text = document.getElementById('phone-text')

phone.onfocus = function () {
    phone_text.style.display = 'block'
}
phone.onblur = function () {
    if (phone_z.test(phone.value)) {
        phone_text.innerHTML = '输入正确'
        phone_text.style.color = 'green'
    } else {
        phone_text.innerHTML = '输入有误'
        phone_text.style.color = 'red'
        phone_text.style.display = 'block'
    }
    phone_text.style.display = 'none'
}
phone.oninput = function () {
    phone_text.style.display = 'none'
}

// 发送验证码按钮=====================================

// 获取发送验证码 
var send_ = document.getElementById('send')
// 创建4位随机数
var str = 0
var num = 60
var timer
send_.onclick = function () {
    clearInterval(timer)
    timer = setInterval(() => {
        num--
        send_.innerHTML = `(${num})秒后重发`
        if (num == 56) {
            str = Math.round(Math.random() * 10000)
            str > 1000 ? str : str += 1000
            alert('本轮验证码为:' + str)
        }
    }, 1000);
}
//  获取验证码=========================================
var verify_ = document.getElementById('verify')
// 手机号提示框
var verify_text = document.getElementById('verify-text')

verify_.onfocus = function () {
    verify_text.style.display = 'block'
}
verify_.onblur = function () {
    if (verify_.value == '') {
        verify_text.innerHTML = '输入有误'
        verify_text.style.color = 'red'
        verify_text.style.display = 'block'
    } else if (verify_.value == str) {
        verify_text.innerHTML = '输入正确'
        verify_text.style.color = 'green'
    } else {
        verify_text.innerHTML = '输入有误'
        verify_text.style.color = 'red'
        verify_text.style.display = 'block'
    }
    verify_text.style.display = 'none'
}
verify_.oninput = function () {
    verify_text.style.display = 'none'
}
// 获取新密码 ==================================================

//  密码正则
var pass_z = /^\d{6,12}$/
// 获取新密码
var newpass = document.getElementById('newpass')
// 获取新密码提示框
var pass_text = document.getElementById('pass_text')

newpass.onfocus = function () {
    pass_text.style.display = 'block'
}
newpass.onblur = function () {
    if (pass_z.test(newpass.value)) {
        pass_text.innerHTML = '输入正确'
        pass_text.style.color = 'green'
    } else {
        pass_text.innerHTML = '输入有误'
        pass_text.style.color = 'red'
        pass_text.style.display = 'block'
    }
    pass_text.style.display = 'none'
}
newpass.oninput = function () {
    pass_text.style.display = 'none'
}

// 立即注册================================
var ljze = document.getElementById('ljze')

ljze.onclick = function () {
    if (phone_z.test(phone.value) && verify_.value == str && pass_z.test(newpass.value)) {
        alert('注册成功！')
        setCookie('phone', phone.value)
        setCookie('newpass', newpass.value)
        location.href = './login.html'
    } else {
        alert('注册失败！请完善信息……')
    }
}


