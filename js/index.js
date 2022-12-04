//Author:	Deon Goh
//Date:		12/04/2022

//Function name: imageChange
//Parameter:	 img(image to change to)
//Brief:		 function to change the image when caled to image by parameter
function imageChange(img) {
	//get the current image and switch it to image specified by paramter
  document.getElementById("selected-image").src = img;
};

//Function name: Load()
//Brief:	     function on body load for functionality for dragging a list of image and stopping
function Load(){
  //slider to attach these functionalities to 
  var slider = document.querySelector(".testimonies");
  console.log(slider);
  //on mouse click
  let mouseDown = false;
  let startX, scrollLeft;
  //function mouse down on the image 
  let startDragging = function(e){
    console.log("startDragging");
	  //set mouse down to true to add image scrolling functionality 
    mouseDown = true;
    //store start horizontal value of the mouse minus the slider offset 
    startX = e.pageX - slider.offsetLeft;
	  //store how much the slider scrolled to the left 
    scrollLeft = slider.scrollLeft;
  };

  //function when mouse is supposed to stop draggin 
  let stopDragging = function(event){
    console.log("stopDragging");
    mouseDown = false;
  };
  
  //function registers as mouse moves across
  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    console.log(mouseDown);
	  //if mouse is not held on the image then return as we only want to activate it when there is an image 
    if(!mouseDown) { return; }
    console.log("onmousemove");
	  //store the offset of the mouse minus the current slider offset 
    const x = e.pageX - slider.offsetLeft;
	  //store how much the list of image is scrolled to the left 
    const scroll = x - startX;
    console.log(x);
	  //set the list of image how much they are supposed to scroll to the left 
    slider.scrollLeft = scrollLeft - scroll;
  });
  
  // Add the event to the slider element 
  //when mouse is clicked 
  slider.addEventListener('mousedown', startDragging, false);
  //when mouse is released on the image  
  slider.addEventListener('mouseup', stopDragging, false);
  //when mouse pointer leaves the image
  slider.addEventListener('mouseleave', stopDragging, false);
};