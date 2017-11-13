function GameWorld(){
	this.firstGameWrap = document.getElementsByClassName('first-game-container')[0];
	this.firstGameWrap.style.width = "600px";
	this.firstGameWrap.style.height = "600px";
	this.firstGameWrap.style.background = "url(track.png)";
	this.firstGameWrap.style.backgroundRepeat = "repeat-y";
	this.firstGameWrap.style.position = "relative";
	this.firstGameWrap.style.overflow ="hidden";
	var counter = 0;
	var that = this;
	setInterval(function(){
		that.firstGameWrap.style.backgroundPosition = "0px "+counter+"px"; 
		counter+=1;
	},1);
}
function PlayerCar(gameWorld){
	this.playerCar = document.createElement('div');
	this.playerCar.style.width = "80px";
	this.playerCar.style.height = "180px";
	this.playerCar.style.background = "url(playercar.png)";	
	this.playerCar.style.backgroundSize = 'Cover';
	this.playerCar.style.position = "absolute";
	this.left = 60;
	this.top = 420;
	this.playerCar.style.left = "60px";
	this.playerCar.style.top = "420px";
	gameWorld.firstGameWrap.appendChild(this.playerCar);
}
function EnemyCar(gameWorld){
	this.enemyCar = document.createElement('div');
	this.enemyCar.style.width = "80px";
	this.enemyCar.style.height = "180px";
	this.enemyCar.style.background = "url(enemycar.png)";	
	this.enemyCar.style.backgroundSize = 'Cover';
	this.enemyCar.style.position = "absolute";
	this.enemyCar.style.top = "-180px";
	this.top = -180;
	var that = this;
	this.init = function (value){
		this.left = value;
		this.enemyCar.style.left=value + 'px';
	}
	gameWorld.firstGameWrap.appendChild(this.enemyCar);
	this. moveCar = function(){
			that.top+=1;
			that.enemyCar.style.top = that.top+"px";
		}

	}

checkCollision = function(objA,objB){
	if((objA.left+80>objB.left) && (objA.left<objB.left+80) && (objA.top+180>objB.top) && (objA.top<objB.top+180))
	{
		return true;
	}
	else{
	return false;
		}
	}
	var game = new  GameWorld();

var gameLoop = function(){
	

var myCar = new PlayerCar(game);
var carArray = [];
var scores = 0;
var createCar = setInterval(function(){
	var opponentCar1 =new EnemyCar(game);
	var opponentCar2 = new EnemyCar(game);
	var getRandomPos1 = 60 + (Math.floor(Math.random()*3))*200;
	var getRandomPos2  = 60 + (Math.floor(Math.random()*3))*200;
	while(1){
		if(getRandomPos1!=getRandomPos2){
			break;
		}
		else{getRandomPos2  = 60 + (Math.floor(Math.random()*3))*200;};
	}
	opponentCar1.init(getRandomPos1);
	opponentCar2.init(getRandomPos2);
	var body = document.getElementsByTagName('body')[0];
	var score = document.createElement('div');
	setTimeout(function(){
		scores+=1;
		game.firstGameWrap.removeChild(opponentCar1.enemyCar);
		game.firstGameWrap.removeChild(opponentCar2.enemyCar);
		score.innerHTML = scores;


	},4500)
	
	carArray.push(opponentCar1);
	carArray.push(opponentCar2);
},2500);

var carMovement = setInterval(function(){
	for(var i = 0;i <carArray.length; i++){
		if(carArray[i].top>620){
			carArray.splice(i,1);
		}
		// console.log(carArray.length);
		carArray[i].moveCar();
		if(checkCollision(myCar,carArray[i])){
			gameover(game,createCar,carMovement,myCar)
		}
	}
	
},2);
document.onkeydown = function(event){
	if(event.keyCode==37 && myCar.left>60){
		myCar.left -=200;
		myCar.playerCar.style.left = myCar.left+'px';
	}
	else if(event.keyCode ==39 && myCar.left<460){
		myCar.left += 200;
		myCar.playerCar.style.left = myCar.left+'px';
	}
}
}


var startButton = document.createElement('button');
game.firstGameWrap.appendChild(startButton);
startButton.innerText = 'Start Game';
startButton.onclick = function(){
    startButton.style.display = 'none';
    // gameOver.innerHTML= "";
    gameLoop();

}
var gameover = function(game,createCar,carMovement,myCar){
clearInterval(createCar);
clearInterval(carMovement);
game.firstGameWrap.removeChild(myCar.playerCar);
startButton.style.display = "block";
}



