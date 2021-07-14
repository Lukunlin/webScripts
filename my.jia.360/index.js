// ==UserScript==
// @name         360持续监控
// @namespace    https://github.com/Lukunlin/webScripts/my.jia.360/index.js
// @version      1.0
// @description  针对360总是会无操作后自动关闭监控
// @author       Colin
// @match        http*://my.jia.360.cn/web/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    
    console.warn('正在进行自动清理定时器中...')
    setInterval(() => {
        var _silence = window.silence || {}
        clearTimeout(_silence.timer)
        clearInterval(_silence.timer)
        console.log(_silence, 'Silence value', _silence.timer)
    }, (1000 * 60 * 1))
})();
