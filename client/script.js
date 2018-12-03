$(document).ready(function() {
    // On initialise notre variable "ws" avec un WebSocket où on indique l'url
    // à laquelle le client se connecte et le serveur répond
    var ws = new WebSocket('ws://127.0.0.1:8080/chat?pseudo=toto');
    console.log(ws);

    // A chaque appel de la page, le client appelle la fonction qui envoie
    // une donnée au serveur, ici le message "Texte"
    ws.onopen = function() {
        ws.send("Texte");
    };
});