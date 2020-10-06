let i=0 ;
// start point
let images = [];
let time= 5000;

// image list
images[0] = 'img/team.jpg';
images[1] = 'img/wave.jpg';
images[2] = 'img/above.jpg';

// function change image

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i= 0;
  }
  setTimeout("changeImg()", time);
}


window.onload = changeImg;