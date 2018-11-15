var anchorPoints = [];
var anchorLocation = [];
var anchorIndex;
var waiting = false;
var offset = 50;

window.onload = function(){
    anchorPoints = document.getElementsByClassName("anchor");
    anchorIndex = 0;


    for(i = 0; i < anchorPoints.length; i++){
        getLocation = anchorPoints[i].getBoundingClientRect();
        getLocation = getLocation.top - offset;

        anchorLocation.push(parseInt(getLocation));
    }

    window.scrollTo(0, 0);
    console.log(anchorLocation);

}


$(document).on('mousewheel DOMMouseScroll', function (e) {
    if(waiting){
      return;
    }
    e.preventDefault();//prevent the default mousewheel scrolling
    var active = $('section.active');
    var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
    waiting = true;
    if (delta < 0) {
      anchorIndex += 1;
      if(anchorIndex > (anchorPoints.length - 1)){
        anchorIndex = 0;
      }
      scrollTo({
        top: anchorLocation[anchorIndex],
        left: 0,
        behavior: 'smooth'
      });

      console.log(anchorIndex);
      console.log('scrolling down');
    } else {
      anchorIndex -= 1;
      if(anchorIndex < 0){
        anchorIndex = anchorPoints.length - 1;

      }
      scrollTo({
        top: anchorLocation[anchorIndex],
        left: 0,
        behavior: 'smooth'
      });
      console.log(anchorIndex);
      console.log('scrolling up');
    }
setTimeout(function(){
    waiting = false;
  }, 1000);
  });