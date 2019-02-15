
var webSocket;
if (window.WebSocket)
{
    webSocket = new WebSocket("ws://localhost/chatroom");

    //连通之后的回调事件
    webSocket.onopen = function()
    {
        document.getElementById("chatroom_title").innerHTML = "<h3 class=\"panel-title\" >聊天室--已连接</h3>";
        // webSocket.send("张三");
        webSocket.send("{\"msg\":\""+"boss你好"+"\",\"from\":\""+"张三"+"\",\"to\":\"boss\"}");
    };

    //接收后台服务端的消息
    webSocket.onmessage = function (evt)
    {
        var received_msg = evt.data;
        var content = document.getElementById("main").innerHTML;
        content = content + "<div class=\"panel-body\" style=\"padding: 10px;\"><img src=\"images/tourist.jpg\" alt=\"...\" class=\"img-circle\" style=\"width:30px; height:30px;\"><div style=\"display:inline; border-radius: 5px 5px 5px 5px; background: lime; width: 500px;height: 30px; padding: 8px;\">"+received_msg+"</div></div>";
        document.getElementById("main").innerHTML = content;
    };

    //连接关闭的回调事件
    webSocket.onclose = function()
    {
        document.getElementById("chatroom_title").innerHTML = "<h3 class=\"panel-title\" >聊天室--连接断开</h3>";
        //alert("无法连接到服务器");
    };

    function send(params) {
        document.getElementById("chatroom_title").value = "聊天室-已连接";
        var content = document.getElementById("main").innerHTML;
        var msg = document.getElementById("msg").value;
        if(msg != ""){
            content = content + "<div class='panel-body' style='padding: 10px; text-align: right;' ><div style='display:inline; border-radius: 5px 5px 5px 5px; background: lime; width: 500px;height: 30px; padding: 8px;'>"+msg+"</div><img src='images/小僵尸头像.jpg' alt='...' class='img-circle' style='width:30px; height:30px;'></div>";
            // 发送信息
            webSocket.send("{\"msg\":\""+msg+"\",\"from\":\""+"张三"+"\",\"to\":\"boss\"}");
            // 更新聊天框
            document.getElementById("main").innerHTML = content;
            // 清空文本框
            document.getElementById("msg").value = "";
        }
        
    }
}

// function send(params) {
//     var content = document.getElementById("main").innerHTML;
//     var msg = document.getElementById("msg").value;
//     content = content + "<div class='panel-body' style='padding: 10px; text-align: right;' ><div style='display:inline; border-radius: 5px 5px 5px 5px; background: lime; width: 500px;height: 30px; padding: 8px;'>"+msg+"</div><img src='images/小僵尸头像.jpg' alt='...' class='img-circle' style='width:30px; height:30px;'></div>";
//     // 更新聊天框
//     document.getElementById("main").innerHTML = content;
//     // 清空文本框
//     document.getElementById("msg").value = "";
//     // alert(msg);
// }