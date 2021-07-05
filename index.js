var namee = "";
var course = "";
var author = "";
var isLoading = true;
function createCard() {
  namee = document.getElementById("name").value;
  course = document.getElementById("course").value;
  author = document.getElementById("author").value;
  document.getElementById("loading").innerHTML =
    '<h1 class="fun">Loading...</h1>';
  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("author").value = "";
  var randomImage = new Array();  
  randomImage[0] = "./images/c0.png";  
  randomImage[1] = "./images/c1.jfif"; 
  randomImage[2] = "./images/c2.jfif";
  randomImage[3] = "./images/c3.jfif";
  randomImage[4] = "./images/c4.jfif";
  randomImage[5] = "./images/c5.jfif";
  const add = setTimeout(() => {
    var number = Math.floor(Math.random()*randomImage.length); 
    document.getElementById("cards").innerHTML += `<div class="container">
          <img src="${randomImage[number]} " class=cardImage>
          <div class="three">
          <span class="flexi">
            <h4>Name: </h4>
            <p>${namee}</p>
          </span>
          <span class="flexi">
            <h4>Course: </h4>
            <p>${course}</p>
          </span>
          <span class="flexi">
            <h4>Author: </h4>
            <p>${author}</p>
          </span>
          </div>
        </div> 
        `;
    document.getElementById("loading").innerHTML = "";
  }, 1000);
}