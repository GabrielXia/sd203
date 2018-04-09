'use strict'

function sendMessage() {
  var textArea = document.getElementById("textedit");
  var message = textArea.value;
  if(message.length == 0) return;
  var url = "chat.php?phrase=";
  var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
  reader.open("get", url + message, false);
  reader.onreadystatechange = function(){
      if(reader.readyState==4 && reader.status==200){
      	textArea.value = "";
      }
  };
  reader.send(null);
}

function refresh() {
  var history = document.getElementById("textarea");
  history.innerHTML = "";
  var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
  reader.open('get', 'texte.txt', false);
  reader.onreadystatechange = function(){
        if(reader.readyState==4 && reader.status==200){
            var text = reader.responseText;
            var lineArr = text.split("\n");
            var reversed = lineArr.reverse();
            for (var i = 1; i < reversed.length; i ++ ) {
              if (i <= 10) {
                var p = document.createElement("p");
                p.innerHTML = reversed[i];
                history.appendChild(p);
              }
            }
        }
    };
  reader.send(null);
  setTimeout("refresh()", 500);
}
