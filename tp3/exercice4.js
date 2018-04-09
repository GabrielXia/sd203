"use strict"

var slides = null;
var current = -1;
var p = false;
var time = 0;

function start() {
  var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
  reader.open('get', 'slides.json', false);
  reader.onload = function(){
    slides = JSON.parse(this.responseText).slides;
  };
  reader.send();
  return slides;
}

function changeTo(id) {
  if(id == slides.lengh || id < 0) return;
  var slide = slides[id];
  var div = document.getElementById("MAIN");
  div.innerHTML = "";
  if (slide.url.length > 0) {
    var frame = document.createElement("iframe");
    frame.src = slide.url;
    div.appendChild(frame);
  }
  current = id;
  time = slide.time;
}

function periodeCheck() {
    if(p == true) {
      return;
    }
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].time == time) {
        changeTo(i);
      }
    }

    time = time + 1;
    setTimeout(periodeCheck, 1000);
}

function checkData() {
  if (slides == null) {
    start();
  }
}
function play() {
  checkData();
  p = false;
  periodeCheck();
}

function pause() {
  checkData();
  p = true;
}

function next() {
  checkData();
  changeTo(current + 1);
}


function previous() {
  checkData();
  changeTo(current -1);
}
