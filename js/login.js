
// 获取 普通登录界面
var log_pt = document.getElementsByClassName('log_pt')[0]

// 获取 验证码快捷登录界面
var log_kj = document.getElementsByClassName('log_kj')[0]

// 获取 普通登录 按钮
var log_pt_1 = document.getElementsByClassName('log_pt_1')[0]

// 获取验证码快捷登录按钮
var log_kj_1 = document.getElementsByClassName('log_kj_1')[0]


log_pt_1.ontouchstart = function () {
    log_pt.style.display = 'block'
    log_kj.style.display = 'none'
}
log_kj_1.ontouchstart = function () {
    log_pt.style.display = 'none'
    log_kj.style.display = 'block'
}
