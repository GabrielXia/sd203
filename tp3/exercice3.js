"use strict"

function start() {
  var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
  var jsonObj;
  reader.open('get', 'slides.json', false);
  reader.onload = function(){
    jsonObj = JSON.parse(this.responseText);

  };
  reader.send();
  return jsonObj;
}

function play() {
  var jsonObj = start();
  var arr = jsonObj.slides;
  var div = document.getElementById("MAIN");
  arr.map(function(o){
    setTimeout(function(){
      div.innerHTML = "";
      if(o.url.length > 0) {
        var frame = document.createElement("iframe");
        frame.src = o.url;
        div.appendChild(frame);
      }
    }, o.time * 1000);
  })
}
