	index = 0; // set index to 0
	tempIndex = 0; // set tempIndex to 0
	var elements; // create global variable
	var canClick = true; // set canClick to true
	window.onload = function(){ // when window is loaded
		elements = document.getElementsByClassName("slideablecontent"); // create array elements of slideablecontent elements
	}

	function makeChange(number, floating){
		if(canClick){ // if canClick is true
			canClick = false; // set canClick to false
			tempIndex = index; // set tempIndex to index
			index += number; // change index by number
			if(index > elements.length-1){ // if index is bigger than length of elements
				index = 0; // then set index to 0
			}

			if(index < 0){ // if index is less than 0
				index = elements.length-1; // set index to length of elements
			}

			setWidth(floating); // call setWidth
		}
	}

	function setWidth(floating){
	    var element = document.getElementById(elements[index].id); // get element by index
	    var tempElement = document.getElementById(elements[tempIndex].id); // get tempElement by tempIndex
	    var animation = setInterval(setAnimation, 10); // set interval (for animation) for 1 sec
	    tempElementPos = 100; // set startvalue (100%) of tempElement position
	    elementPos = 0; // set start value (0%) of element position

	    if(floating){ // if floating is true make changes in the float for correct animation
	    	tempElement.style.cssFloat = "right";
	    	element.style.cssFloat = 'left';
	    } else { // else set to default float settings.
	    	tempElement.style.cssFloat = 'left';
	    	element.style.cssFloat = 'right';
	    }

	    function setAnimation() {
	        if (tempElementPos == 0 && elementPos == 100) { // if tempElementPos == 0 and elementPos == 100
	            clearInterval(animation); // clear interval
	            canClick = true; // set canClick to true
	        } else {
	        	elementPos++; // increase elementPos by one
	        	tempElementPos--; // decrease tempElementPos by one
	        	tempElement.style.width = tempElementPos + "%"; // change width of tempElement with value of tempElementPos
	            element.style.width = elementPos + "%"; // change width of element with value of elementPos
	            
	        }
	    }
	}