// ==UserScript==
// @name         猫咪登录
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  针对猫咪韩剧的动态域名无法记住账号密码的问题
// @author       Colin
// @match        https://*/user/login.html
// @icon         https://www.google.com/s2/favicons?domain=7edd0f03cd92.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.warn('正在启动脚本检测.................');
    window.onload = function(){
        // 查找当前是否是猫咪下
        var $findDom = $('.tip-text p:first')
        var html = $findDom.text()
        if(html.indexOf('reCAPTCHA') !== -1) {
            console.warn('当前正在猫咪韩剧下,正在写入账号')
            $('#username').val('bboykungu')
            $('#password').val('kjfdsrew56')
            $('#postDataBtn').trigger('click')
            setTimeout(function(){
                $('.tip-btn.bg2').trigger('click')
            }, 3000)
        }
    }
})();