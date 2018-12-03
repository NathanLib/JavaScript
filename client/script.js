$(document).ready(function() {
    var ws = new WebSocket('ws://127.0.0.1:8080/chat?pseudo=toto');
    console.log(ws);

    ws.onopen = function() {
        ws.send("Texte");
    };
});