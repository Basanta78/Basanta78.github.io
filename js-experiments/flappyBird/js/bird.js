class Bird{
  constructor(birdElement){
    this.up = 90;
    this.dy = 1;
    this.classBirdElement = birdElement;
    this.x = 100;
    this.y = 200;
    this.classBirdElement.style.left = this.x + 'px';
    this.classBirdElement.style.top = this.y + 'px';
  }
  birdGravity(){

    this.y+=this.dy;
    this.classBirdElement.style.top = this.y + 'px';
  }
  moveUp(){
    this.y-=this.up;
    this.classBirdElement.style.top = this.y + 'px';
  }

}