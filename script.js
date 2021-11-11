var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.js.webarchive';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

import $ from "jquery";

$(document).ready(function(){

  $("button").click(function(){
    $("#box1").hide();
  });

  $("#box2").hover(function(){
    console.log("You entered box2-position changed!");
    $("box2").toggleClass("moveRight")
  });

  $("#box3").click(function(){
    console.log("You clicked box2- color changed!");
    $("box3").toggleClass("changeColor")
  });


}
