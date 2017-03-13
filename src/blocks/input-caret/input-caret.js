// https://benfrain.com/creating-a-custom-input-cursorcaret/
// Communicate to DOM that we have JS

document.documentElement.setAttribute("class", "js");

var searchFauxInput = document.querySelector(".input-caret__span");
var searchBox = document.getElementById("Input");

searchBox.addEventListener("keyup", function copyInput(event) {
      searchFauxInput.textContent = searchBox.value;
      searchBox.setAttribute("value", searchBox.value);
}, false);

//searchBox.focus();