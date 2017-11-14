class Main{
  constructor(){
    this.worldElement = document.getElementsByClassName('mainwrapper')[0];
    this.world =  new World(this.worldElement);
    this.scoreCard = document.createElement('h1');
  this.scoreCard.style.position = "absolute";
  this.scoreCard.style.zIndex = "1";
  this.worldElement.appendChild(this.scoreCard);


  }
  init(){
    
    this.birdElement = document.getElementsByClassName('bird')[0];
    this.bird = new Bird(this.birdElement,200,100);
    
  }
  checkGameover(){
  if(this.bird.y>=500){
    
  }
}
  collsionDetection(objA, objB){
  if((objA.x+70>objB.x) && (objA.x<objB.x+100))
  {
    if((objA.y<=objB.y1) || (objA.y+50>objB.btop))
    {
      return true;
    }
  }
  else{
  return false;
    }
  }

gameloop(startButton){
  let counter =0;
  let obstacles = [];
  let score= 0;
  // this.getScore(this.worldElement);
  let obstacleInterval = setInterval(()=>{
    this.scoreCard.innerHTML  = "score:"+score;
    this.bird.birdGravity()
  if(this.bird.y<=0){
    this.bird.y = 0;
  }
    if(counter%150==0){
      this.obstacle = new Obstacle();
       this.obstacle.createObstacleElement(this.worldElement);
       obstacles.push(this.obstacle);

    }
      this.world.moveWorld()
      for(let i = 0 ;i<obstacles.length;i++){
      if(this.collsionDetection(this.bird,obstacles[i]) || this.bird.y>=450 ){
        clearInterval(obstacleInterval);
        startButton.style.display = "block";
        for(let j = 0;j<obstacles.length;j++){
          obstacles[j].clearObstacle(this.worldElement);
        }

      }
      if(this.bird.x == obstacles[i].x){
        score++;
      }
       obstacles[i].moveObstacle()
       if(obstacles[i].x<=0){
        obstacles[i].clearObstacle(this.worldElement);
        obstacles.splice(i,1);
       }
      }
      counter++;  
      console.log(score);  
  
  },1);

}
keypress(){
  document.onkeydown = (event)=>{
  if(event.keyCode == 32){
    this.bird.moveUp();
  }

}
}
}
let game = new Main();
game.init();
var startButton = document.createElement('button');
startButton.innerHTML = "Start Game";
startButton.style.position = "absolute";
startButton.onclick = () =>{
  startButton.style.display = "none";
  game.init();  
  game.gameloop(startButton);
}
game.worldElement.appendChild(startButton);
game.keypress();

