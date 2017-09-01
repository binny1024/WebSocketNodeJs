/**
    * Created by smart on 2017/9/1.
    * function： 
    */
/*引入 nodejs-websocket 模块*/
var ws = require('nodejs-websocket');
var server = ws.createServer(function (conn) {
    console.log("New connecton");
    conn.on("text",function (str) {
        console.log("客户端发来的数据 ： " +str);
        conn.sendText(str.toUpperCase()+"!!!")
    });
    conn.on("close",function (code,reason) {
        console.log("Connection closed")
    })
}).listen(8181);

