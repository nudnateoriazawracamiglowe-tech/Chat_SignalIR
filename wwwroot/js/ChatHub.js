"use strict";
var connection = new
    signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (user, message) {
    console.log("ReceiveMessage")
    var li= document.createElement("li");
    li.textContent = user + ": " + message;
    document.getElementById("messagesList").appendChild(li);


});

connection.start().then(function () {
    console.log("SignalR started!");

    document.getElementById("someButton").addEventListener("click", function () {
        var user = document.getElementById("someId").value;
        var message = document.getElementById("someOtherId").value;

        connection.invoke("SendMessage", user, message).catch(function (err) {
            document.getElementById("someOtherId").value = "";
            return console.error(err.toString());
        });
    });

}).catch(function (err) {
    return console.error(err.toString());
});
