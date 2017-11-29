/**
 * Player two class
 * @extends MainPlayer
 */
class PlayerTwo extends MainPlayer {
  //change initial position
  init() {
    this.x = 490;
  }
  updatePosition() {
    if ( keys[ 74 ] && this.x >= 0 && !this.checkWallCollision( this.x - 1, this.y ) && !this.checkWallCollision( this.x - 1, this.y + this.height ) ) {
      this.x -= this.dx;
      this.position = "tank_player1_left_c0_t1";
      this.direction = "left";
    } else if ( keys[ 76 ] && this.x <= 576 && !this.checkWallCollision( this.x + 34, this.y ) && !this.checkWallCollision( this.x + 34, this.y + this.height ) ) {
      this.x += this.dx;
      this.position = "tank_player1_right_c0_t1";
      this.direction = "right";
    } else if ( keys[ 73 ] && this.y >= 0 && !this.checkWallCollision( this.x, this.y - 1 ) && !this.checkWallCollision( this.x + this.width, this.y - 1 ) ) {
      this.y -= this.dy;
      this.position = "tank_player1_up_c0_t1"
      this.direction = "up";
    } else if ( keys[ 75 ] && this.y <= 576 && !this.checkWallCollision( this.x, this.y + 34 ) && !this.checkWallCollision( this.x + this.width, this.y + 34 ) ) {
      this.y += this.dy;
      this.position = "tank_player1_down_c0_t1"
      this.direction = "down";
    }
  }
  shootBullet() {
    if ( keys[ 81 ] && this.isBulletDetroyed ) {
      this.playerBullet = new Bullet( playerTwo.x, playerTwo.y, playerTwo.direction, this.map );
      bulletArray.push( this.playerBullet );
      this.isBulletDetroyed = false;
      this.playerBullet.updateBullet();
    }
    if ( this.playerBullet != null ) {
      this.playerBullet.renderBullet();
      this.playerBullet.checkWallCollision();

      this.playerBullet.moveBullet();
      this.isBulletDetroyed = this.playerBullet.checkBulletDestroyed();
      if ( this.isBulletDetroyed ) {
        let index = bulletArray.indexOf( this.playerBullet );
        bulletArray.splice( index, 1 );
        this.playerBullet = null;
      }
    }
  }

}
