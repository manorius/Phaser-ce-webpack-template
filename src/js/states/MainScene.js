BasicGame.MainScene = function (game) {

};

BasicGame.MainScene.prototype = {
  init: function () {
    let self = this;
  },

  create: function () {
    let self = this;
    this.game.input.addPointer();

    // SCALING
    let scaler = this.scale.userScaler;
    this.game.world.setBounds(0, 0, BasicGame.realWidth, BasicGame.realHeight);

    // MAIN SPRITE
    let image = "phaser-logo";
    let phaserImage = this.add.image(0, 0, image);
    phaserImage.anchor.set(.5);
    scaler.scaleSprite(phaserImage);
    phaserImage.x = this.game.world.centerX;
    phaserImage.y = this.game.world.centerY;

    
  },
 

  update: function () {
  },

};
