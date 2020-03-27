const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

window.addEventListener("load", () => {	
	
	//variables
	let painting = false;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//functions
	
	function startPosition(e){
		painting = true;
		draw(e);
	}
	
	function endPosition(){
		painting = false;
		ctx.beginPath();
	}
	
	function draw(e){
		if(!painting) return;
		ctx.lineWidth = 10;
		ctx.lineCap = "round";
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
	//Event listeners
	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", endPosition);
	canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize",()=>{
	ctx.width = window.innerWidth;
	ctx.height = window.innerHeight;
});