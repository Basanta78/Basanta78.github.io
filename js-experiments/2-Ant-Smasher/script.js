var main = document.getElementsByClassName("mainwrapper")[0];
function Ant(){
	this.left=0;
	this.top=0;
	this.horizontal=1;
	this.vertical =1;
	var that = this;
	this.init =function(x,y){
			this.element = document.createElement('div');
			this.element.style.width = "40px";
			this.element.style.height = "40px";
			this.element.style.background = "blue";
			this.element.style.position = "absolute";
			// this.element.style.background="url('ant.png')";
			this.left = x;
			this.top = y;
			main.appendChild(this.element);
	}

	

	this.move = function(){
			if(that.left>=460)
			{
				that.horizontal=-1;
			}
			else if(that.left<=0)
			{
				that.horizontal = 1;
			}
			if(that.top<=0)
			{
				that.vertical= 1;
			}
			else if(that.top>=460)
			{
				that.vertical = -1;
			}


			if(that.horizontal==1){
				that.left+=1;
				that.element.style.left =that.left+"px";
				if(that.vertical== -1){
					that.top-=1;
					that.element.style.top =that.top+"px";
				}
				else{
					that.top+=1;
					that.element.style.top = that.top+"px";
				}
			}
			else{
				that.left-=1;
				that.element.style.left =that.left+"px";
				if(that.vertical== -1){
					that.top-=1;
					that.element.style.top =that.top+"px";
				}
				else{
					that.top+=1;
					that.element.style.top = that.top+"px";
				}
			}

			}
		}

checkCollision = function(objA,objB){
		// console.log(objA.left,objB.left);
	if((objA.left+40>objB.left) && (objA.left<objB.left+40) && (objA.top+40>objB.top) && (objA.top<objB.top+40))
	{
	return true;
	}
	else{
	return false;
		}
	}

gameloop = function(){
var objectArray = [];
for (var i = 0;i<6;i++)
{
	var ant = new Ant();
	// console.log(this);
	objectArray.push(ant);
	ant.init(Math.floor(Math.random()*400+1),Math.floor(Math.random()*400+1));
	console.log(objectArray);
	ant.element.onclick = function(){
		console.log(this);
		this.style.left=0;
		this.style.top=0;
		main.removeChild(this);
	}
	
}

setInterval(function(){
	for(var i =0;i<6;i++){
		objectArray[i].move();
		for (var j=0;j<6;j++){
			if(j!=i){
			if(checkCollision(objectArray[i],objectArray[j])){
				objectArray[i].horizontal *= -1;
				objectArray[i].vertical *= -1;
				objectArray[j].horizontal *= -1;				
				objectArray[j].horizontal *= -1;
			}
		}
	}

	}

},10);
}	
var startButton = document.createElement('button');
document.getElementsByTagName('body')[0].appendChild(startButton);
startButton.innerText = 'Start Game';

startButton.onclick = function(){
    startButton.style.display = 'none';
    gameOver.style.display = 'none';
    gameloop();

}
var gameOver = document.createElement('div');
main.appendChild(gameOver);
gameOver.style.fontSize = '50px';
gameOver.style.color = 'red';
gameOver.style.position = 'absolute';
gameOver.style.display = 'none';
gameOver.style.top = '20px';
gameOver.style.left = '230px';
gameOver.innerHTML = 'GAME OVER !!';







