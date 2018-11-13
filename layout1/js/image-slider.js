var slideIndex = 1; // start index
var canClick = false; // set can click on false;
showDivs(slideIndex); // first call


function plusDivs(n) {
	if(canClick) // if can click is true
	{
  		showDivs(slideIndex += n); // call showDivs with value slindeIndex + n
  		canClick = false; // set can click to false;
  	}
}

function showDivs(n) {
  var x = document.getElementsByClassName("slideable-content"); // save a array with slideable-content elements
  if(n > x.length) // if n is higher then x array
  {
  	console.log("> slideIndex: " + slideIndex);
  	slideIndex = 1; // set slideIndex to 1
  }

  if(n < 1){ // if n is lower than 1
  	console.log("< slideIndex: " + slideIndex);
  	slideIndex = x.length; // set slideIndex to length of x array
  }

  for(var i = 0; i < x.length; i++){
    if(i == slideIndex-1){ // if i is equal to slideIndex-1
              animAdd(x[i].id); // call animAdd() with
            console.log('add ' + x[i].id);
    } else { // else
            console.log('min ' + x[i].id);
            animMin(x[i].id); // call anim:Min() with x[i];
    }
  }

  // for(var i=0; i < x.length;i++){
  // 	//x[i].style.width = 0;
  // 	console.log("Test: "+ x[i].id);
  // 	animMin(x[i].id);
  // }

  // animAdd(x[slideIndex-1].id);
  // //x[slideIndex-1].style.width="100%";
}

function animAdd(element) {
    var elem = document.getElementById(element);
    
    console.log(elem.style.width);
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos >= 100) {
            clearInterval(id);
            canClick = true;
        } else {
        	canClick = false;
            pos++; 
            elem.style.width = pos + '%';
        }
    }
}

function animMin(element) {
    var elem = document.getElementById(element); 
    console.log(elem.style.width);
    var pos = 100;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            canClick = true;
        } else {
            pos--; 
            elem.style.width = pos + '%'; 
        }
    }
}