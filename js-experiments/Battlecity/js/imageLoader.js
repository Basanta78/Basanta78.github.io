/**
 * Image loader class
 */
class loadImage {
  //initailization
  constructor() {
    this.images = null;
  }
  init() {
    this.images = {
      tank_player1_down_c0_t1: null,
      tank_player1_left_c0_t1: null,
      tank_player1_right_c0_t1: null,
      tank_player1_up_c0_t1: null,

      tank_basic_down_c0_t1: null,
      tank_basic_left_c0_t1: null,
      tank_basic_right_c0_t1: null,
      tank_basic_up_c0_t1: null,

      big_explosion_5: null,
      bullet_up: null,
      bullet_down: null,
      bullet_left: null,
      bullet_right: null,

      wall_brick: null,
      wall_steel: null,
      trees: null,
      water_1: null,
      water_2: null,

      base: null,
      base_destroyed: null,


      battle_city: null,
      game_over: null,
    };
    for ( let i in this.images ) {
      let img = new Image();
      img.src = 'images/' + i + '.png';
      this.images[ i ] = img;
    }
  }

  getImage( name ) {
    console.log( this.images );
    return this.images[ name ]
  }
  //draw in canvas
  draw( name, posx, posy, tileSize ) {
    ctx.drawImage( this.images[ name ], posx, posy, tileSize, tileSize );
  }
}
