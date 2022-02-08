// ==UserScript==
// @name         TSQuery Ast解释器
// @namespace    https://github.com/Lukunlin/webScripts/my.jia.360/index.js
// @version      1.0
// @description  针对TSQuery Layout高度不够的问题
// @author       Colin
// @match        http*://tsquery-playground.firebaseapp.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    window.onload = function(){
        setTimeout(() => {
            var dom = document.querySelector('.container')
            dom.style.height = '85%'
        }, 1000)
    }
})();
