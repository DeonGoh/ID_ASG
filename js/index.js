function imageChange(img) {
  document.getElementById("selected-image").src = img;
};

function Load(){
  var slider = document.querySelector(".testimonies");
  console.log(slider);
  //on mouse click
  let mouseDown = false;
  let startX, scrollLeft;
  //when mouse down
  let startDragging = function(e){
    console.log("startDragging");
    mouseDown = true;
    //the movement to move left
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  //attach to mouseUp Event
  let stopDragging = function(event){
    console.log("stopDragging");
    mouseDown = false;
  };

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    console.log(mouseDown);
    if(!mouseDown) { return; }
    console.log("onmousemove");
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    console.log(x);
    slider.scrollLeft = scrollLeft - scroll;
  });
  
  // Add the event listeners
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
};