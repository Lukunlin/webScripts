// ==UserScript==
// @name         菜鸟教程正则布局修改
// @namespace    https://github.com/Lukunlin/webScripts/my.jia.360/index.js
// @version      1.0
// @description  针对菜鸟教程正则容器高度不够的问题
// @author       Colin
// @match        http*://c.runoob.com/front-end/854/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    window.onload = function(){
        var contentDom = document.querySelector('#textSour')
        contentDom.style.height = '500px'
        var matchDom = document.querySelector('#textMatchResult')
        matchDom.style.height = '300px'
    }
})();
