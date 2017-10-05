const canvas = document.querySelector("#draw");
const penColor = document.querySelector("#pen-color");
const penSize = document.querySelector("#pen-size");
const clear = document.querySelector(".clear");
const multi = document.querySelector(".multi");
const ctx = canvas.getContext("2d");
//const inputs = document.querySelectorAll('.controlls input');
canvas.width = 600;
canvas.height = 600;

ctx.strokeStyle = penColor.value;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = penSize.value;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
	//stop function from running if not mousedown
	if (!isDrawing) return;
	//beginpath
	ctx.beginPath();
	//start from
	ctx.moveTo(lastX, lastY);
	//go to
	ctx.lineTo(e.offsetX, e.offsetY);
	//stroke();
	ctx.stroke();
	//last x to equal offsetX and last y to equal offsetY
	[lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleHover() {
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

canvas.addEventListener("mousedown", e => {
	//sets isDrawing to true
	isDrawing = true;
	//when mousedown lastX and lastY should = offset and not 0
	[lastX, lastY] = [e.offsetX, e.offsetY];
	ctx.strokeStyle = penColor.value;
	ctx.lineWidth = penSize.value;
});
//when mouse moves draw
canvas.addEventListener("mousemove", draw);
//but if mouse is up or out then set isDrawing to false
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
clear.addEventListener("click", clearCanvas);
penColor.addEventListener("change", handleHover);