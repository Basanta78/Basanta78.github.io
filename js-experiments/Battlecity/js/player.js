/**
 * Single Player class
 */
class MainPlayer{
  //initializations
  constructor(){
    this.x = 190;
    this.y =576;
    this.width = 32;
    this.height = 32;
    this.dx =1;
    this.dy =1;
    this.position = "tank_player1_up_c0_t1";
    this.direction = null;
    this.playerBullet = null;
    this.isBulletDetroyed = true;
    this.lives = 1;
    this.isDead =false;
  }
  //display player in canvas
  renderPlayer(){
    //respawn player after death
    if(this.isDead){
      this.x = 199;
      this.y = 576;
      this.isDead = false;
    }
      imageLoad.draw(this.position,this.x,this.y,this.width,this.height); //draw image
  }
  loadMap(_map){
    this.map = _map;
  }
  // check if tile is walkable or solid
  isSolidTileAtXY(posx,posy){
    var y = Math.floor(posx/this.width);
    var x = Math.floor(posy/this.width);
    if(x>=0 && y>=0 && x<=18 && y<=18){
      var getMapValue = this.map[x][y];
      if( getMapValue==1 || getMapValue==2 || getMapValue ==4){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }

  }
  checkWallCollision(x,y){
   var collision =
       this.isSolidTileAtXY(x, y)
  return collision;

}
  // player movement
  updatePosition(){
    if( keys[37] && this.x>=0 && !this.checkWallCollision(this.x-1,this.y) && !this.checkWallCollision(this.x-1,this.y+this.height)){
      this.x-=this.dx;
      this.position = "tank_player1_left_c0_t1";
      this.direction = "left";
    }
    else if(keys[39] && this.x<=576 && !this.checkWallCollision(this.x+34,this.y) && !this.checkWallCollision(this.x+34 ,this.y+this.height)){
    this.x+=this.dx;
    this.position = "tank_player1_right_c0_t1";
    this.direction = "right";
    }
    else if(keys[38] && this.y>=0 && !this.checkWallCollision(this.x,this.y-1) && !this.checkWallCollision(this.x+this.width,this.y-1) ){
      this.y-=this.dy;
      this.position = "tank_player1_up_c0_t1"
      this.direction = "up";
    }
    else if(keys[40] && this.y<=576 && !this.checkWallCollision(this.x,this.y+34)  && !this.checkWallCollision(this.x+this.width,this.y+34)){
      this.y += this.dy;
      this.position = "tank_player1_down_c0_t1"
      this.direction = "down";
    }
  }
  //player shoot bullet
  shootBullet(){
  if(keys[32] && this.isBulletDetroyed){
    this.playerBullet = new Bullet(player.x,player.y,player.direction,this.map);
    bulletArray.push(this.playerBullet);
    this.isBulletDetroyed = false;
    this.playerBullet.updateBullet();
  }
  if(this.playerBullet !=null){
    this.playerBullet.renderBullet();
    this.playerBullet.checkWallCollision();
    if(this.playerBullet.baseDestroyCollision()){
      gameOver =true;
    }
    this.playerBullet.moveBullet();
    this.isBulletDetroyed = this.playerBullet.checkBulletDestroyed();
    if(this.isBulletDetroyed){
      let index = bulletArray.indexOf(this.playerBullet);
      bulletArray.splice(index,1);
      this.playerBullet =null;
    }
  }
}

}
