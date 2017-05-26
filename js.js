var button = document.getElementById("button")

button.onclick = function () {
  var color = document.getElementById("color")
  color.style.backgroundColor = "#0FF";
  color.innerHTML = "Hello";
  color.style.height = 300 + "px";
  color.style.color = "black";
}

