/**
 * Enemy tank class
 */
class Enemy {
  //initialize
  constructor( _map ) {
    this.width = 32;
    this.height = 32;
    this.dx = 1;
    this.dy = 1;
    this.position = "tank_basic_right_c0_t1";
    this.direction = "right";
    this.y = 0;
    this.map = _map;
    this.isBulletDetroyed = true;
    this.getRandomValue = 4;
    this.directionCounter = 0;
  }
  // enemy creation in 3 random spawn areas
  createEnemy() {
    this.x = ( Math.floor( Math.random() * 3 ) ) * 200;
  }
  // draw enemy tank in canvas
  renderEnemy() {
    imageLoad.draw( this.position, this.x, this.y, this.width, this.height );
  }
  // check if tile is solid or walkable
  isSolidTileAtXY( posx, posy ) {
    var y = Math.floor( posx / this.width );
    var x = Math.floor( posy / this.width );
    if ( x >= 0 && y >= 0 && x <= 18 && y <= 18 ) {
      var getMapValue = this.map[ x ][ y ];
      if ( getMapValue == 1 || getMapValue == 2 || getMapValue == 3 ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }

  }
  // collision
  checkWallCollision( x, y ) {
    var collision =
      this.isSolidTileAtXY( x, y )
    return collision;

  }
  // move enemy tank
  updatePosition() {
    this.directionCounter++;
    if ( this.directionCounter % ( Math.floor( Math.random() * ( 100 - 70 ) - 70 ) ) == 0 ) {
      this.getRandomValue = Math.floor( Math.random() * 3 + 1 );
    }
    if ( this.getRandomValue == 1 && this.x <= 576 && !this.checkWallCollision( this.x + 34, this.y ) && !this.checkWallCollision( this.x + 34, this.y + this.height ) ) {
      this.x += this.dx;
      this.position = "tank_basic_right_c0_t1"
      this.direction = "right";
    } else if ( this.getRandomValue == 2 && this.x >= 0 && !this.checkWallCollision( this.x - 1, this.y ) && !this.checkWallCollision( this.x - 1, this.y + this.height ) ) {
      this.x -= this.dx;
      this.position = "tank_basic_left_c0_t1"
      this.direction = "left";
    } else if ( this.getRandomValue == 3 && this.y <= 576 && !this.checkWallCollision( this.x, this.y + 34 ) && !this.checkWallCollision( this.x + this.width, this.y + 34 ) ) {
      this.y += this.dy;
      this.position = "tank_basic_down_c0_t1";
      this.direction = "down";
    } else if ( this.getRandomValue == 4 && this.y >= 0 && !this.checkWallCollision( this.x, this.y - 1 ) && !this.checkWallCollision( this.x + this.width, this.y - 1 ) ) {
      this.y -= this.dy;
      this.position = "tank_basic_up_c0_t1";
      this.direction = "up";
    }
  }
  // enemy bullet
  enemyShootBullet( player ) {
    if ( this.isBulletDetroyed ) {
      //create new bullet after destruction
      this.enemyBullet = new Bullet( this.x, this.y, this.direction, this.map );
      bulletArray.push( this.enemyBullet );
      this.isBulletDetroyed = false;
      this.enemyBullet.updateBullet();
    }
    this.enemyBullet.checkWallCollision();
    if(this.enemyBullet.baseDestroyCollision()){
      gameOver =true;
    }
    this.enemyBullet.renderBullet();
    this.enemyBullet.moveBullet();
    // kill player condition
    if ( this.enemyBullet.hitTankCheck( player ) ) {
      player.lives -= 1;
      player.isDead = true;
    }
    this.isBulletDetroyed = this.enemyBullet.checkBulletDestroyed();
    if ( this.isBulletDetroyed ) {
      let index = bulletArray.indexOf( this.enemyBullet );
      bulletArray.splice( index, 1 );
      this.enemyBullet = null;
    }
  }
  rectangularCollision( objA, objB ) {
    if ( ( objA.x + 32 > objB.x ) && ( objA.x < objB.x + 32 ) && ( objA.y + 32 > objB.y ) && ( objA.y < objB.y + 32 ) ) {
      console.log( "collide" );
      return true;
    } else {
      return false;
    }
  }
  // enemy enemy collision
  betweenEnemyCollision( objB ) {
    if ( this.rectangularCollision( this, objB ) ) {
      if ( this.getRandomValue == 1 ) {
        this.getRandomValue = 2;
        objB.getRandomValue = 1;
      } else if ( this.getRandomValue == 2 ) {
        this.getRandomValue = 1;
        objB.getRandomValue = 2;
      } else if ( this.getRandomValue == 3 ) {
        this.getRandomValue = 4;
        objB.getRandomValue = 3;
      }
    }
  }



}
