var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.js.webarchive';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

import $ from "jquery";

$(document).ready(function(){

  $("button").click(function(){
    $(".rectangles").hide();
  });

  $("#box2").hover(function(){
    console.log("You entered box 2-position changed!");
    $("box2").addClass("moveRight");
  }),
  

  $("#box3").click(function(){
    console.log("You clicked box 2- color changed!");
    $("box3").toggleClass("changeColor");
  });


}

