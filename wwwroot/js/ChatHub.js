"use strict";
var connection = new
    signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (msg) {
    console.log("ReceiveMessage")
    console.log(msg)
    var li= document.createElement("li");
    li.textContent = msg.user + ": " + msg.text+":"+msg.timestamp;
    document.getElementById("messagesList").appendChild(li);


});

connection.start().then(function () {
    console.log("SignalR started!");

    document.getElementById("someButton").addEventListener("click", function () {
        var user = document.getElementById("someId").value;
        var message = document.getElementById("someOtherId").value;

        connection.invoke("SendMessage", user, message).catch(function (err) {
            return console.error(err.toString());
        });
        document.getElementById("someOtherId").value = "";
    });

}).catch(function (err) {
    return console.error(err.toString());
});
