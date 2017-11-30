/**
* Game mode selection and menu class
*/
class BattleCity {

  // main menu view initialization
  constructor () {
    let view = View.getInstance ();
    let startScreen;
    let menuList;
    let startGame;
    let construction;
    let userLevels;
    let twoPlayer;

    this.mainWrapper;
    this.startScreen;
    this.x = 200;
    this.y = 220;

    this.mainWrapper = view.getMainWrapper ();
    this.startScreen = view.create ( 'div' );
    menuList = view.create ( 'ul' );
    startGame = view.create ( 'li' );
    startGame.innerHTML = "Start Game";
    twoPlayer = view.create ( 'li' );
    twoPlayer.innerHTML = "Two Player";
    construction = view.create ( 'li' );
    construction.innerHTML = "Construction";
    userLevels = view.create ( 'li' );
    userLevels.innerHTML = "User Levels";
    this.btnWrapper = view.create ( 'div' );
    this.backToMenuBtn = view.create ( 'button' );

    this.tank = view.create( 'div' );
    view.addClass( this.startScreen, 'start-screen' );
    view.addClass( this.tank, 'tank' );
    view.addClass( this.btnWrapper, 'btn-wrapper' );
    view.addClass( this.backToMenuBtn, 'back-btn' );
    this.tank.style.top = this.y + 'px';
    this.tank.style.left = this.x + 'px';

    view.append( this.mainWrapper, this.startScreen );
    view.append( this.startScreen, this.tank );
    view.append( this.startScreen, menuList );
    view.append( menuList, startGame );
    view.append( menuList, twoPlayer );
    view.append( menuList, construction );
    view.append( menuList, userLevels );
    view.append( this.btnWrapper, this.backToMenuBtn );
    view.append( this.mainWrapper, this.btnWrapper );

    this.edit = new Editor();
    this.lvls = new CreatedLevels();
  }

  init() {
    this.backToMenuBtn.addEventListener( 'click', ( event ) => {
      this.startScreen.style.display = 'block';
      this.backToMenuBtn.style.display = 'none';
      this.lvls.removeCreatedLevelsScreen();
      this.edit.removeEditor();

    } );
  }
  // Menu tank movement and selection
  updateMenuPosition() {
  let dy = 75;
  document.onkeydown = ( event ) => {
    if ( event.keyCode == 87 && this.y >= 290 ) {
      this.y -= dy;
      this.tank.style.top = this.y + 'px'; //220 295 370
    } else if ( event.keyCode == 83 && this.y <= 370 ) {
      this.y += dy;
      this.tank.style.top = this.y + 'px';
    } else if ( event.keyCode == 13 ) {
      if ( this.y == 220 ) {
        canvas.style.display = 'block';
        sound.play("stageStart")
        gameloop();
        this.mainWrapper.style.display = "none";
      } else if ( this.y == 295 ) {
        enableTwoPlayer = true;
        canvas.style.display = 'block';
        sound.play("stageStart")

        gameloop();
        this.mainWrapper.style.display = "none";
      } else if ( this.y == 370 ) {
        this.edit.init();
        this.startScreen.style.display = "none";
        this.backToMenuBtn.style.display = "block";
      } else if ( this.y == 445 ) {
        this.lvls.init();
        this.startScreen.style.display = "none";
        this.backToMenuBtn.style.display = "block";
      }
    }
  }
}

}
let battleCity = new BattleCity();
battleCity.init();
battleCity.updateMenuPosition();
