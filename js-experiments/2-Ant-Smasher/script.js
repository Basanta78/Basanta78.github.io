// var main = document.getElementsByClassName("mainwrapper")[0];
function createWorld(div){
	this.main = document.getElementsByClassName(div)[0];
	this.main.style.backgroundImage = "url(floor.jpe)";
	this.main.style.width = "500px";
	this.main.style.height = "500px";
	this.main.style.position = "relative";
}
function Ant(){
	this.left=0;
	this.top=0;
	this.horizontal=1;
	this.vertical =1;
	var that = this;
	this.element = document.createElement('div');
	this.init =function(x,y,parent){			
			this.element.style.width = "40px";
			this.element.style.height = "40px";
			// this.element.style.background = "blue";
			this.element.style.position = "absolute";
			this.element.style.background="url(ant1.png)";
			this.element.style.backgroundSize = "Cover";
			this.left = x;
			this.top = y;
			parent.main.appendChild(this.element);
	}

	this.move = function(){
			if(that.left>=460){
				that.horizontal=-1;
			}
			else if(that.left<=0){
				that.horizontal = 1;
			}
			if(that.top<=0){
				that.vertical= 1;
			}
			else if(that.top>=460){
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
	if((objA.left+40>objB.left) && (objA.left<objB.left+40) && (objA.top+40>objB.top) && (objA.top<objB.top+40))
	{
		return true;
	}
	else{
	return false;
		}
	}
	var world = new createWorld("mainwrapper");

gameloop = function(){
var objectArray = [];
for (var i = 0;i<6;i++){
	var ant = new Ant();
	objectArray.push(ant);
	ant.init(Math.floor(Math.random()*400+1),Math.floor(Math.random()*400+1),world);
	console.log(objectArray);
	ant.element.onclick = function(_ant){
		return function( ) {
		var index = objectArray.indexOf(_ant);
		objectArray.splice(index,1);
		console.log(index,objectArray.length);
		world.main.removeChild(_ant.element);
		if(objectArray.length==0){
			gameOver.style.display="block";
			startButton.style.display="block";
		}
		}
	}(ant);
	
}

setInterval(function(){
	for(var i =0;i<objectArray.length;i++){
		objectArray[i].move();
		for (var j=0;j<objectArray.length;j++){
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
world.main.appendChild(gameOver);
gameOver.style.fontSize = '50px';
gameOver.style.color = 'red';
gameOver.style.position = 'absolute';
gameOver.style.display = 'none';
gameOver.style.top = '20px';
gameOver.style.left = '30px';
gameOver.innerHTML = 'GAME OVER !!';








