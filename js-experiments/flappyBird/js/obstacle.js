class Obstacle{
  constructor(){
    this.x = 900;
    this.y1 = 0;
    this.max = 200;
    this.min = 50;
    this.gap = 200;
    this.y2=0;
  }
  createObstacleElement(parent){
    this.topObstacleElement = document.createElement('div');
    this.bottomObstacleElement  = document.createElement('div');
    this.topObstacleElement.style.width = '100px';
    this.topObstacleElement.style.top = 0 +'px';
    this.topObstacleElement.style.position = "absolute";
    this.topObstacleElement.style.background ="url(images/obstaclebg.png)";
    this.topObstacleElement.style.backgroundSize = "Cover";


    this.bottomObstacleElement.style.width = '100px';
    this.bottomObstacleElement.style.position = "absolute";
    this.bottomObstacleElement.style.background = "url(images/obstaclebg.png)";
    this.bottomObstacleElement.style.backgroundSize ="Cover";
    parent.appendChild(this.topObstacleElement);
    parent.appendChild(this.bottomObstacleElement);
    let randomHeight = Math.floor(Math.random()*(this.max-this.min)+this.min);
    this.topObstacleElement.style.height = randomHeight + 'px';
    this.y1=randomHeight;
    this.btop = randomHeight+this.gap;
    this.bottomObstacleElement.style.top = this.btop+ 'px';
    this.y2 = 500 - parseInt(this.bottomObstacleElement.style.top);
    this.bottomObstacleElement.style.height =this.y2 +'px';
  }
  moveObstacle(){
    this.x-=2;
    this.topObstacleElement.style.left = this.x + 'px';
    this.bottomObstacleElement.style.left = this.x + 'px';

  }
  clearObstacle(parent){
    parent.removeChild(this.topObstacleElement);
    parent.removeChild(this.bottomObstacleElement);
  }

}