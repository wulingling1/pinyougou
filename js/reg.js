window.onload = function() {
    var regte1 = /^1[3|4|5|7|8]\d{9}$/; //手机号码验证正则表达式
    var tel = document.querySelector("#tel");
    regexp(tel, regte1);
    var regte2 = /^[1-9][0-9]{4,}$/; //QQ号码验证正则表达式
    var qq = document.querySelector("#qq");
    regexp(qq, regte2);
    var regte3 = /^[\u4e00-\u9fa5]{2,8}$/; //昵称正则表达式
    var nc = document.querySelector("#nc");
    regexp(nc, regte3);
    //表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请重新输入';
            }
        }
    }

}