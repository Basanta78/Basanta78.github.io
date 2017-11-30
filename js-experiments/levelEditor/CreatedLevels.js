function CreatedLevels() {
  var view = View.getInstance();

  var storage;
  var levelsWrapper;

  var that = this;

  this.init = function() {
    var mainWrapper = view.getMainWrapper();
    var deleteAllBtn = view.create('button');
    levelsWrapper = view.create('div');

    view.addClass(levelsWrapper, 'levels-wrapper');
    view.addClass(deleteAllBtn, 'delete-all-btn');
    view.style(levelsWrapper, { display: 'block' });
    view.append(levelsWrapper, deleteAllBtn);
    view.append(mainWrapper, levelsWrapper);

    deleteAllBtn.onclick = that.deleteAllMaps;

    storage = new Storage();

    that.showLevels();
  };

  this.showLevels = function() {
    let totalStoredLevels = storage.getLength();

    if (totalStoredLevels != 0) {
      for (let i = 1; i < totalStoredLevels; i++) {
        let levelButton = view.create('div');
        let levelName = storage.getItemName(i);

        view.setHTML(levelButton, levelName);
        view.addClass(levelButton, 'level-btn');
        view.append(levelsWrapper, levelButton);

        levelButton.onclick = (function(i) {
          return function() {
            that.startLevel(i);
            console.log("usdfdsf",i);
            // that.removeCreatedLevelsScreen();
            var level = storage.getItem(levelName);
            game.map = JSON.parse(level);
            let maps = level;
            canvas.style.display = 'block';
            sound.play("stageStart");
            gameloop();
            battleCity.mainWrapper.style.display = "none";
          };
        })(i);
      }
    } else {
      var noMapsMessage = view.create('div');

      view.addClass(noMapsMessage, 'no-maps');
      view.setHTML(noMapsMessage, 'No maps currently saved. Please use the Level Editor to create custom Maps');
      view.append(levelsWrapper, noMapsMessage);
    }
  };

  this.deleteAllMaps = function() {
    storage.clear();

    that.removeCreatedLevelsScreen();
    that.init();
  };

  this.startLevel = function(i) {
    var levelName = storage.getItemName(i);
    var level = storage.getItem(levelName);
  };

  this.showCreatedLevelsScreen = function() {
    if (levelsWrapper) {
      view.style(levelsWrapper, { display: 'block' });
    }
  };

  this.removeCreatedLevelsScreen = function() {
    if (levelsWrapper) {
      view.style(levelsWrapper, { display: 'none' });

      while (levelsWrapper.hasChildNodes()) {
        //removes all the created levels on screen, so that it can be initiated again showing new levels that user creates
        view.remove(levelsWrapper, levelsWrapper.lastChild);
      }
    }
  };
}
