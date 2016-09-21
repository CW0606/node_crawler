var superagent = require('superagent');  
var cheerio = require('cheerio');  
var async = require('async');
var sleep = require('sleep');



console.log('爬虫程序开始运行......');
var start_phone = 18509932502;

function crawl(phone){
	superagent.post("https://passport.secoo.com/register/logic_register.jsp?jsoncallback=?")
    	.send({ 
        // 请求的表单信息Form data
        	userName: phone, 
        	command : 'CHECKNAME', 
        	})
	       // Http请求的Header信息
	   .set('Accept', 'application/json, text/javascript, */*; q=0.01')
	   .set('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
	   .set('User-Agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 XMLHttpRequest/x-www-form-urlencoded; charset=UTF-8')
	   .end(function(err, res){          
	        // 请求返回后的处理
	        // 将response中返回的结果转换成JSON对象
	        if (err){
	        	console.log(phone + 'null');
	        	return;
	        }
	        data = JSON.parse(res.text);
        	if (data['recode'] == 0){
        		console.log(phone);
       		}
	    }); 
}


for (var i = 30000; i >=0; i--){
	phone = start_phone + i;
	crawl(phone);
}