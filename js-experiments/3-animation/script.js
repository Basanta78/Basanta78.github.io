let canvas = document.getElementById("canvas");
canvas.style.background = "#043a4a";
let ctx = canvas.getContext("2d");
let phase = 0;
let speed = 0.00001;
let frameCount= 0;
let maxCircleSize = 10;
let numRows =11;
let numCols =15;
function drawBall(){	