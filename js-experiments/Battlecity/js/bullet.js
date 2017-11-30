/**
 * Bullet class to manage bullet actions
 */
class Bullet {
  // initialization
  constructor( posx, posy, position, _map ) {
    this.x = posx;
    this.y = posy;
    this.width = 8;
    this.height = 8;
    this.dx = 4;
    this.dy = 4;
    this.direction = null;
    this.position = position;
    this.map = _map;
  }
  //draw bullet in canvas
  renderBullet() {
    imageLoad.draw( this.direction, this.x, this.y, this.width, this.height );
  }
  //collsion condition
  rectangularCollision( objA, objB ) {
    if ( ( objA.x + 32 > objB.x ) && ( objA.x < objB.x + 32 ) && ( objA.y + 32 > objB.y ) && ( objA.y < objB.y + 32 ) ) {
      return true;
    } else {
      return false;
    }
  }
  moveBullet() {
    if ( this.direction == "bullet_right" ) {
      this.x += this.dx;
    } else if ( this.direction == "bullet_left" ) {
      this.x -= this.dx;
    } else if ( this.direction == "bullet_up" ) {
      this.y -= this.dy;
    } else if ( this.direction == "bullet_down" ) {
      this.y += this.dy;
    }
  }
  //destroy bullet
  checkBulletDestroyed() {
    if ( this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height || this.checkWallCollision() || this.interBulletcollision() ) {
      return true;
    }
  }
  //move bullet
  updateBullet() {
    if ( this.position == "left" ) {
      this.direction = "bullet_left";
      this.y += 2 * this.height - this.height / 2;
      this.x -= this.width / 2;
    } else if ( this.position == "up" ) {
      this.direction = "bullet_up";
      this.x += 2 * this.width - this.width / 2;
      this.y -= this.height / 2;
    } else if ( this.position == "right" ) {
      this.direction = "bullet_right";
      this.y += 2 * this.height - this.height / 2;
      this.x += 4 * this.width - this.width / 2;
    } else {
      this.direction = "bullet_down";
      this.x += 2 * this.width - this.width / 2;
      this.y += 4 * this.height - this.height / 2;
    }
  }
  //destroy wall
  checkWallCollision() {
    var y = Math.floor( this.x / ( 4 * this.width ) );
    var x = Math.floor( this.y / ( 4 * this.width ) );
    if ( x >= 0 && x <= 18 && y >= 0 && y <= 18 ) {
      var getMapValue = this.map[ x ][ y ];
      if ( getMapValue == 1 ) {
        this.map[ x ][ y ] = 0;
        sound.play( "wallHit" );
        imageLoad.draw( "big_explosion_5", this.x, this.y, this.width * 4, this.height * 4 );
        return true;

      } else if ( getMapValue == 2 ) {
        return true;

      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  baseDestroyCollision() {
    var y = Math.floor( this.x / ( 4 * this.width ) );
    var x = Math.floor( this.y / ( 4 * this.width ) );
    if ( x >= 0 && x <= 18 && y >= 0 && y <= 18 ) {
      var getMapValue = this.map[ x ][ y ];
      if ( getMapValue == 5) {
        console.log(getMapValue);
        sound.play( "wallHit" );
        imageLoad.draw( "big_explosion_5", this.x, this.y, this.width * 4, this.height * 4 );
        return true;

      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  hitTankCheck( player ) {
    if ( ( this.x + 8 > player.x ) && ( this.x < player.x + 32 ) && ( this.y + 8 > player.y ) && ( this.y < player.y + 32 ) ) {
      sound.play( "explosion" );
      imageLoad.draw( "big_explosion_5", this.x, this.y, this.width * 4, this.height * 4 );
      return true;
    } else {
      return false;
    }
  }
  //bullet bullet collision
  interBulletcollision() {
    for ( let k = 0; k < bulletArray.length; k++ ) {
      if ( this != bulletArray[ k ] ) {
        if ( this.rectangularCollision( this, bulletArray ) ) {
          let index1 = bulletArray.indexOf( this );
          let index2 = bulletArray.indexOf( bulletArray );
          bulletArray.splice( index1, 1 );
          bulletArray.splice( index2, 1 );
        }
        return this.rectangularCollision( this, bulletArray[ k ] );
      }
    }

  }


}
