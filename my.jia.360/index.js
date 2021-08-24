// ==UserScript==
// @name         360持续监控
// @namespace    https://github.com/Lukunlin/webScripts/my.jia.360/index.js
// @version      1.1
// @description  针对360总是会无操作后自动关闭监控
// @author       Colin
// @match        http*://my.jia.360.cn/web/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // 进行清理掉超时自动暂停视频
    console.warn('正在进行自动清理定时器中...');
    setInterval(() => {
        var _silence = window.silence || {};
        clearTimeout(_silence.timer);
        clearInterval(_silence.timer);
        console.log(_silence, 'Silence value', _silence.timer);
    }, (1000 * 60 * 1));

    // 对页面布局进行修改
    var findCount = 0;
    var getMainBox = function(callback) {
        var mainBox = document.getElementById('ipcs_list_box');
        console.log(mainBox, 123);
        if(mainBox) {
            callback && callback(mainBox);
        }
        else {
            setTimeout(function() {
                findCount++;
                if(findCount < 100) {
                    getMainBox(callback);
                }
            }, 1000);
        }
    }
    window.onload = function(){
        getMainBox(function(dom) {
            dom.style.width = 'auto';
        })
    }
})();
