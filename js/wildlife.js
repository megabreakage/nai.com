// start point
var i=0;
var images =[];
var time = 3000;

// image list

images[0] = "images/lilo.jpg";
images[1] = "images/nnp1.jpg";
images[2] = "images/gir2.jpg";

// change image
function changeImg(){
  document.slide.src= images[i];
  if (i< images.length -1){
    i++;
  } else {
    i=0;
  }

  setTimeout("changeImg()"), time);
}
window.onload=changeImg;
