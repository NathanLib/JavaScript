$(document).ready(function() {
  var pseudo = prompt();
  var ws = new WebSocket('ws://127.0.0.1:8080/chat?pseudo='+pseudo);

  ws.onopen = function() {
    $("#chat-body").append("<p>Vous êtes connecté</p>");
  };

  ws.onmessage = function (event) {
    var msg = JSON.parse(event.data);

    var now = new Date();
    var heureMsg = "[" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "]";
    $("#chat-body").append("<p>" + "<span class='badge badge-info'>" + heureMsg + "</span>" + " " + msg.emetteur +  " : " + msg.texte + "</p>");
  };

  clickBouton();








  function ajouteEvent(objet, typeEvent, nomFonction, typePropagation){
    if (objet.addEventListener){
    	objet.addEventListener(typeEvent, nomFonction, typePropagation);
    }
  	else if (objet.attachEvent) 		{
  		objet.attachEvent('on'+typeEvent, nomFonction);
  	}
  }

  function clickBouton() {
    var bouton = document.getElementById('boutonEnvoye');
    ajouteEvent (bouton, 'click', recupererMessage, false);

  }

  function recupererMessage() {
    var messageTexte = document.getElementById('messageTexte');
    ajouterMessageDansChat(messageTexte.value);
  }

  function ajouterMessageDansChat(message){
    ws.send(message);
  }
});
