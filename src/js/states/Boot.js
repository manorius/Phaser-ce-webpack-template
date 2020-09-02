BasicGame.Boot = function (game) { };

BasicGame.Boot.prototype = {

  preload: function () {


  },

  create: function () {

    this.input.maxPointers = 1;
    this.input.touch.preventDefault = true;
    this.stage.disableVisibilityChange = true;

    BasicGame.orientated = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // set the customize scaler
    this.scale.userScaler = new BasicGame.Scaler(this);
    this.scale.userScaler.setScreenSize(BasicGame.realWidth, BasicGame.realHeight);

    this.state.start('Preloader');
  },
  update: function () {
  }

};