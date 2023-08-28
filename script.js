let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 3000);
}

const img1 = document.getElementById("item1");
const img2 = document.getElementById("item2");
const img3 = document.getElementById("item3");
const img4 = document.getElementById("item4");
const img5 = document.getElementById("item5");
const img6 = document.getElementById("item6");
const img7 = document.getElementById("item7");

const men1 = document.getElementById("menu1")
const men2 = document.getElementById("menu2")
const men3 = document.getElementById("menu3")
const men4 = document.getElementById("menu4")
const men5 = document.getElementById("menu5")
const men6 = document.getElementById("menu6")
const men7 = document.getElementById("menu7")

 