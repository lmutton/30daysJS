const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "color";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let size = true;

function draw(e) {
	//stop function from running if not mousedown
	if (!isDrawing) return;
	//set stroke colour
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
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

	//change colour
	hue++;
	if (hue === 360) {
		hue = 0;
	}

	//change pen size
	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		size = !size;
	}
	if (size) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

canvas.addEventListener("mousedown", e => {
	//sets isDrawing to true
	isDrawing = true;
	//when mousedown lastX and lastY should = offset and not 0
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
//when mouse moves draw
canvas.addEventListener("mousemove", draw);
//but if mouse is up or out then set isDrawing to false
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));