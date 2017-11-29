/**
 * Game sounds add class
 */
class GameSound {
  //initialization
  constructor() {
    this.bulletShot = new Audio( 'sound/bullet_shot.ogg' );
    this.explosion = new Audio( 'sound/explosion.ogg' );
    this.stageStart = new Audio( 'sound/stage_start.ogg' );
    this.wallHit = new Audio( 'sound/wall_hit.ogg' );
  }
  // play with given element
  play( element ) {
    if ( element == 'bulletShot' ) {
      this.bulletShot.play();
    } else if ( element == 'explosion' ) {
      this.explosion.play();
    } else if ( element == 'stageStart' ) {
      this.stageStart.play();
    } else if ( element == 'wallHit' ) {
      this.wallHit.play();
    }
  }
}
let test = new GameSound();
