/**
 * Single player game class
 */
class MainGame {
  constructor() {
    this.mapObject = new Map();
    this.map = this.mapObject.getMap();
    this.wallBrickArray = [];
    this.wallSteelArray = [];
  }
  //render map in canvas
  drawMap() {
    let posx = 0;
    let posy = 0;
    let tileSize = 32;
    let mapIndex = 0;
    for ( let c = 0; c < this.map.length; c++ ) {
      for ( let r = 0; r < this.map[ 0 ].length; r++ ) {
        let tile = this.map[ c ][ r ]
        if ( tile == 1 ) {
          imageLoad.draw( "wall_brick", r * tileSize, c * tileSize, tileSize, tileSize );

        } else if ( tile == 2 ) {
          imageLoad.draw( "wall_steel", r * tileSize, c * tileSize, tileSize, tileSize );
        } else if ( tile == 3 ) {
          imageLoad.draw( "trees", r * tileSize, c * tileSize, tileSize, tileSize );
        } else if ( tile == 4 ) {
          imageLoad.draw( "water_1", r * tileSize, c * tileSize, tileSize, tileSize );
        } else if ( tile == 5 ) {
          imageLoad.draw( "base", r * tileSize, c * tileSize, tileSize, tileSize )
        }
      }
    }
  }
}
let keys = [];
//key binding
let bindKeyPress = () => {
  document.body.addEventListener( 'keydown', function ( e ) {
    keys[ e.keyCode ] = true;
  } );

  document.body.addEventListener( 'keyup', function ( e ) {
    keys[ e.keyCode ] = false;
  } );
}
bindKeyPress();

//global variables
let enemyArray = [];
let bulletArray = [];
let enemyNumber = 0;
let enableTwoPlayer = false;
let Counter = 0;
let enemyPerGame = 12;
let score = 0;
let gameOver = false;

let imageLoad = new loadImage();
let sound = new GameSound();
let game = new MainGame();
let player = new MainPlayer();
let playerTwo = new PlayerTwo();


imageLoad.init();
playerTwo.init();

//main game loop
let gameloop = () => {
  ctx.fillStyle = "black";
  ctx.fillRect( 0, 0, canvas.width, canvas.height );
  game.drawMap();
  player.loadMap( game.map )
  player.renderPlayer();
  player.updatePosition();
  player.shootBullet();

  if ( enableTwoPlayer ) {
    playerTwo.loadMap( game.map );
    playerTwo.renderPlayer();
    playerTwo.updatePosition();
    playerTwo.shootBullet();
  }
  Counter++;
  if ( enemyArray.length < 4 && Counter % 200 == 0 && enemyNumber <= enemyPerGame ) {
    let enemy = new Enemy( game.map );
    for ( let l = 0; l < enemyArray.length; l++ ) {
      if ( enemy.betweenEnemyCollision( enemyArray[ l ] ) ) {
        enemy = new Enemy( game.map );
        break;
      }
    }
    enemyNumber++;
    enemy.createEnemy();
    enemyArray.push( enemy );
  }
  for ( let i = 0; i < enemyArray.length; i++ ) {
    enemyArray[ i ].renderEnemy();
    for ( let j = 0; j < enemyArray.length; j++ ) {
      if ( i != j ) {
        enemyArray[ i ].betweenEnemyCollision( enemyArray[ j ] )

      }
    }

    enemyArray[ i ].updatePosition();
    enemyArray[ i ].enemyShootBullet( player );
    if ( player.playerBullet != null ) {
      if ( player.playerBullet.hitTankCheck( enemyArray[ i ] ) ) {
        enemyArray.splice( i, 1 );
        score += 100;
      }
    }

    if ( playerTwo.playerBullet != null ) {
      if ( playerTwo.playerBullet.hitTankCheck( enemyArray[ i ] ) ) {
        enemyArray.splice( i, 1 );
        score += 100;
      }
    }
  }
  console.log(gameOver);
  animation = requestAnimationFrame( gameloop );
  if ( player.lives <= 0 ||gameOver ) {
    cancelAnimationFrame( animation );
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    setInterval( function () {
      ctx.fillText( "SCORE" + score, 300, 300 );
    }, 3000 );
  }
}
// gameloop();
