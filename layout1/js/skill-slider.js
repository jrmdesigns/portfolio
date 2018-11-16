var slider = document.getElementById("myRange"); // get element myRange 
// htmlbutton = document.getElementById("htmlbutton"); 
var wrapper = $("#slider-wrapper");             // get element #slider-wrapper
var buttons = [$("#htmlbutton"), $("#cssbutton"), $("#jsbutton")]; // make array with buttons
var textArray = ["html", "css", "js"]; // make array with text
var buttonPos = []; // make empty array for button positions
var buttonWidth = []; // make empty array for button width
var buttonOffset = 25; // set offset;

var imagesPath = "images/";
var imageArray = ["html.png", "css.png", "js.png"];

for(i = 0; i < buttons.length; i++){
  var position = buttons[i].position().left / wrapper.width() * 100 - buttonOffset; // get the position of button with index and convert it to %
  var width = buttons[i].width() / wrapper.width()*100; // get the width of the button with index
  buttonPos.push(position); // add the position to the buttonPos array
  buttonWidth.push(width); // add the width to the buttonWidth array
}

slider.oninput = function(){
  for(i = 0; i < buttons.length; i++){
    if(slider.value >= buttonPos[i] && slider.value <= buttonPos[i] + buttonWidth[i]){ // if value of slider is bigger than button position AND the value of sider is smaller than position + width
      $('#js-about-photo-url').attr('href', imagesPath + imageArray[i]);
      $('#js-skill-slider-image').attr('src', imagesPath + imageArray[i]);
      document.getElementById("js-about-slider-info").style.display = "none" ;
      break;
    } else {
      $('#js-about-photo-url').attr('href', "");
      $('#js-skill-slider-image').attr('src', "");
      document.getElementById("js-about-slider-info").style.display = "block" ;
    }
  }
}

