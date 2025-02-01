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
	ctx.clearRect(0,0,canvas.width,canvas.height);
	phase = frameCount * speed;
	for(let i =0; i<2;i++){
		if(i==0){let strandPhase = phase;}
		else{let strandPhase = phase +Math.PI};
			
		for(let col=0; col<numCols; col++){
			let colOffset = (col*Math.PI*2)/numCols;
			let x = canvas.width-(20*col)-100;	
			for(let row = 0; row <numRows;row++){
				ctx.beginPath();
				let y = canvas.height/2+row*10+	Math.sin(strandPhase+colOffset)*50;
				frameCount++;
				let sizeOffset = (Math.cos(strandPhase-(row/numRows)+colOffset)+1)*0.5;	
				let circleSize = sizeOffset * maxCircleSize;
				ctx.arc(x,y, circleSize, 0, Math.PI*2, false);		
				ctx.fillStyle = "#f59190";
				ctx.fill();
		
			}
		}
	}
		

	ctx.closePath();
}
drawBall();

setInterval (drawBall,1);