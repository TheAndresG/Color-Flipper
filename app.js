const colors = ["green", "red", "rgba(120,110,200)", "#f1a2b1", "blue"];

const btn = document.getElementById("button");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);

  //  Style del body
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
