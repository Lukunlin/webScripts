// ==UserScript==
// @name         猫咪登录
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  针对猫咪韩剧的动态域名无法记住账号密码的问题
// @author       Colin
// @match        https://*/login
// @icon         https://www.google.com/s2/favicons?domain=7edd0f03cd92.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.warn('正在启动脚本检测.................');
    const timeoutId = setTimeout(() => {})
    const intervalId = setInterval(() => {})
    let max = Math.max(timeoutId, intervalId)
    for(let i=max;i>0;i--) {
            clearInterval(i)
            clearTimeout(i)
    }
    window.onload = function(){
        // 查找当前是否是猫咪下
        // var $findDom = $('.tip-text p:first')
        setTimeout(function(){
            var html = document.body.innerHTML
            if(html.indexOf('MAOMIAV.COM') !== -1) {
                console.warn('当前正在猫咪韩剧下,正在写入账号')
                const inputDoms = document.querySelectorAll("input")
                const findArr = [{ label: "用户名", value: "bboykungu" }, { label: "密码", value: "kjfdsrew567" }]
                inputDoms.forEach((dom) => {
                    const placeholder = dom.getAttribute("placeholder", 2)
                    findArr.find(item => {
                        if(placeholder.indexOf(item.label) !== -1) {
                            dom.value = item.value
                        }
                    })
                })
                //$('#username').val('bboykungu')
                //$('#password').val('kjfdsrew56')
                //$('#postDataBtn').trigger('click')
                // setTimeout(function(){
                //     $('.tip-btn.bg2').trigger('click')
                // }, 3000)
            }
        }, 2000)
    }
})();
