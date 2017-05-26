var button = document.getElementById("button")

button.onclick = function () {
  var color = document.getElementById("color")
  color.style.backgroundColor = "#00FF6A";
  color.innerHTML = "Hello";
  color.style.height = 300 + "px";
  color.style.color = "black";
}

