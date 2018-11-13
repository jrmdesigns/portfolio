window.onscroll = function() {
	scrollBtn = document.getElementById("scroll-back-btn");
	if (document.body.scrollTop > 50|| document.documentElement.scrollTop >50) {
		scrollBtn.classList.add('show');
	} else {
		scrollBtn.classList.remove('show');
	} 
}



function scrollBack(){

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'

	});
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});