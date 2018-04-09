'use strict'

function loadDoc() {
  var text = document.getElementById("textarea");
  var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
  reader.open('get', 'm.txt', true);
  reader.onreadystatechange = function(){
        if(reader.readyState==4 && reader.status==200){
            text.innerHTML = reader.responseText;
        }
    };
}
