var request = require('superagent');
var http = require('http');
var queryString = require('queryString');
var fs = require('fs');
var express=require('express');
var app=express(); 
var url='http://op.juhe.cn/onebox/football/';
var urlquery;

//允许前端跨域
app.all('*',function(req,res,next) {
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Content-Length,Authorization, Accept,yourHeaderFeild");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By",' 3.2.1')
res.header("Content-Type","application/json;charset=utf-8");
next();
});

 //请求球队
 app.get('/team',function(req,res,next){
   console.log(req.query);
   urlquery=queryString.stringify(req.query);//得到查询字符窜
   console.log(urlquery);
   var data={
 	 
 };

  request
   .get(url+'team?'+urlquery)
//'http://op.juhe.cn/onebox/football/'+(请求联赛league还是球队team)+'dtype='+(是league还是team)+(league对应的联赛或team对应的球队名字，要先编码)
//+'&key=b117a5992d33a7f05413a7a4349d7b78'
 
   .end(function (err, res1) {
     if (res1.ok) {        
　　　　　　console.log(JSON.stringify(res1.body));
           data=JSON.stringify(res1.body);
           //console.log('\n',data);
            res.writeHead(200, {"Content-Type": "text/javascript;charset=UTF-8"});//向请求的客户端发送响应头
            //res.write(data);
            //res.json(data);
            res.end(data);
  　　　　} else {
　　　　　　console.log('error:' + res.text);
　　　　}

    })              

  }
  )   
    
//请求联赛
app.get('/league',function(req,res,next){
   console.log(req.query);
   var data={
    };
   urlquery=queryString.stringify(req.query);
   console.log(urlquery);
   request
   .get(url+'league?'+urlquery)
//'http://op.juhe.cn/onebox/football/'+(请求联赛league还是球队team)+'dtype='+(是league还是team)+(league对应的联赛或team对应的球队名字，要先编码)
//+'&key=b117a5992d33a7f05413a7a4349d7b78'
   .end(function (err, res1) {
     if (res1.ok) {
           
　　　　　　console.log('yay got ' + JSON.stringify(res1.body));
           var data=JSON.stringify(res1.body);
           res.writeHead(200, {"Content-Type": "text/javascript;charset=UTF-8"});//向请求的客户端发送响应头
            //res.write(data);
            //res.json(data);
            res.end(data);
  　　　　} else {
　　　　　　console.log('Oh no! error ' + res.text);
　　　　}

    })
})   


var server=app.listen(3001,function(){
   console.log('服务器开启，正在监听……')
})             