// 获取到a
var top_ = document.getElementsByClassName('top')
    // 获取到整体点击之后整体提高到最顶部
var model = document.getElementsByClassName('model')[0]
    // 获取区域
var top_a = document.getElementsByClassName('top-a')

var top_span = document.getElementsByClassName('top-span')

// 获取区域显示隐藏
var top1 = document.getElementsByClassName('top1')


for (var i = 0; i < top_.length; i++) {
    top_[i].setAttribute('index', i);
    top_[i].onclick = function() {
        var index = this.getAttribute('index')
        for (var k = 0; k < top_span.length; k++) {
            top_span[k].id = ''
            top_span[index].id = 's1'

        }
        for (var j = 0; j < top_a.length; j++) {
            top_a[j].id = ''
            top_a[index].id = 's'
        }
        for (var q = 0; q < top1.length; q++) {
            top1[q].style.display = "";
            top1[index].style.display = "block";
        }
        model.style.position = "absolute";
        model.style.top = '0';

    }
}


// 当点击蒙版的时候消失
// top1.onclick = function() {
//     this.style.display = "none";
//     model.style.position = "";
//     model.style.top = '';
// }


for (var r = 0; r < top1.length; r++) {
    top1[r].onclick = function() {
        top1[r].style.display = "none";
        model.style.position = "";
        model.style.top = '';
        return false
    }
}