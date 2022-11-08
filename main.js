/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 30;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

let app = document.querySelector(".app");
let brush = document.querySelector(".current-brush");
let palette = document.querySelectorAll(".palette div");
let canvasSquares = document.querySelectorAll(".square");
let clear = document.querySelector("#clear")
let mouseDown = false;


//choose color

for (let i = 0; i < palette.length; i++) {
  palette[i].addEventListener("click", function () {
    console.log(palette[i].classList);
    brush.classList.replace(brush.classList[1], palette[i].classList[1]);
  })
}

//paint

for (let i = 0; i < canvasSquares.length; i++) {
  canvasSquares[i].addEventListener("click", function () {
    if (mouseDown === false) {
      canvasSquares[i].classList.replace(canvasSquares[i].classList[1], brush.classList[1]);
    }
  })
}

app.addEventListener("mousedown", function () {
  mouseDown = true;
})

app.addEventListener("mouseup", function () {
  mouseDown = false;
})

for (let i = 0; i < canvasSquares.length; i++) {
  canvasSquares[i].addEventListener("mouseover", function () {
    if (mouseDown === true) {
      canvasSquares[i].classList.replace(canvasSquares[i].classList[1], brush.classList[1]);
    }
  })
}

//clear canvas
for (let i = 0; i < canvasSquares.length; i++) 
{
  clear.addEventListener("click", function () 
  {
    if (mouseDown === false) 
    {
      canvasSquares[i].classList.replace(canvasSquares[i].classList[1], "whitesmoke")
    }
  })
}