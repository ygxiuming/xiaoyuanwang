// ==UserScript==
// @name         校园网自动登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  根据景德镇陶瓷大学校园网的经常自动断网的尿性，特此写了这个简单的脚本。此脚本有两个功能：1.自动刷新页面，每隔5秒检查网络链接状态。2.自动填充账号密码//当然要自己提前定义哈哈。   缺陷：需要常驻后台  校园网登录网址：172.29.0.2
// @author       修明
// @match        *://172.29.0.2/*
// @icon         https://www.google.com/s2/favicons?domain=0.2
// @charset		 UTF-8
// ==/UserScript==


var xuehao = ""//输入学号  例如：var xueh = "118040700101"
var mima = "" //输入密码	例如 var mima = "123456"

(function() {
    'use strict';
        function go(){//定义函数
        location.reload()
    }//刷新函数
    window.setTimeout(function(){go()},5000);//5秒后执行函数go
    document.getElementsByClassName("edit_lobo_cell")[3].value=xuehao
    document.getElementsByClassName("edit_lobo_cell")[4].value=mima
    document.getElementsByClassName("edit_lobo_cell")[5].checked=true
	//选择运营商：1.中国联通：@unicom；2.中国移动：@cmcc；3.中国电信：@telecom；默认中国移动
    document.getElementsByClassName("edit_lobo_cell")[0].value="@cmcc"  
    document.getElementsByClassName("edit_lobo_cell")[2].click()



    // Your code here...
})();
