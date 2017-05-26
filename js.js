var button = document.getElementById("button")

button.onclick = function () {
  var color = document.getElementById("color")
  color.style.backgroundColor = "#08B6FD";
  color.innerHTML = "Hello";
  color.style.height = 200 + "px";
  color.style.color = "black";
}

