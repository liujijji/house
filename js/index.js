// 获取到小差
var list_ = document.getElementById("list");
var download = document.getElementsByClassName('download')[0];
// console.log(list_);
list_.onclick = function() {
    download.parentNode.removeChild(download);
}