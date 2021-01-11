
var visible1 = false;
console.log(visible1);

var visible2 = false;
var visible3 = false;
var visible4 = false;
var visible5 = false;
var visible6 = false;
var num = 0;


function mostrarInfo(id) {
  console.log(id);

  if (id == "card1") {
    num = 1;

    console.log(visible1);

    if (visible1 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2"
      visible1 = true;
    } else {
      console.log("no visible")
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible1 = false;
    }
  }

  if (id == "card2") {
    num = 2;

    console.log(visible2);

    if (visible2 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2"
      visible2 = true;
    }

    else {
      console.log("no visible")
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible2 = false;
    }
  }

  if (id == "card3") {
    num = 3;

    if (visible3 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2"
      visible3 = true;
    }

    else {
      console.log("no visible")
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible3 = false;
    }
  }

  if (id == "card4") {
    num = 4;

    if (visible4 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2"
      visible4 = true;
    }

    else {
      console.log("no visible")
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible4 = false;
    }
  }

  if (id == "card5") {
    num = 5;

    if (visible5 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2"
      visible5 = true;
    }

    else {
      console.log("no visible")
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible5 = false;
    }
  }

  if (id == "card6") {
    num = 6;

    if (visible6 == false) {
      console.log("visible");
      document.getElementById("centered" + num).style.visibility = "visible";
      document.getElementById("imagen" + num).style.opacity = "0.2"
      visible6 = true;
    }

    else {
      console.log("no visible")
      document.getElementById("centered" + num).style.visibility = "hidden";
      document.getElementById("imagen" + num).style.opacity = "1"

      visible6 = false;
    }
  }


}



var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {

  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndex = 1 }

  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}






