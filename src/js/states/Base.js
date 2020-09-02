BasicGame = {
  version: '0',
  INFOPAGE_QRCODE_SCANNED: 101,
  INFOPAGE_NETWORK_FAILURE: 102,
  INFOPAGE_TODAY_PLAYED: 103,
  INFOPAGE_GAME_COMPLETED: 104,
  INFOPAGE_NO_ATTENTION: 105,
  INFOPAGE_SHARE_LIMIT: 106,
  realWidth: window.innerWidth * window.devicePixelRatio,
  realHeight: window.innerHeight * window.devicePixelRatio,
  totalCollectedValue: -1,
  myInfo: {},
  game: null
};

BasicGame.Scaler = function (game) {
  this.game = game;
};

BasicGame.Scaler.prototype = {

  designRefWidth: 900,
  designRefHeight: 1600,
  screenWidth: 1,
  screenHeight: 1,

  setScreenSize: function (w, h) {
    this.screenWidth = w;
    this.screenHeight = h;
  },

  transformSize: function (val, ratio) {
    var r = ratio ? ratio : 1;
    console.log(val * r);
    return val * r;
  },

  scaleSprite: function (sprite, ratio) {
    var r = ratio ? ratio : 1;
    sprite.scale.set(this.hScale() * r, this.vScale() * r);
  },

  scaleBgSprite: function (sprite, ratio) {
    var r = ratio ? ratio : 1;
    sprite.scale.set((this.screenWidth / this.designRefWidth) * r,
      (this.screenHeight / this.designRefHeight) * r);
  },

  scaleBgX: function (designX) {
    return designX * (this.screenWidth / this.designRefWidth);
  },

  scaleBgY: function (designY) {
    return designY * (this.screenHeight / this.designRefHeight);
  },

  scaleX: function (designX) {
    return /* window.offsetX +  */designX * this.hScale();
  },

  scaleY: function (designY) {
    return /*window.offsetY + */designY * this.vScale();
  },

  hScale: function () {
    if (window.offsetX != 0)
      return (this.screenHeight / this.designRefHeight);
    else
      return (this.screenWidth / this.designRefWidth);
  },

  vScale: function () {
    if (window.offsetY != 0)
      return (this.screenWidth / this.designRefWidth);
    else
      return (this.screenHeight / this.designRefHeight);
  }
};
BasicGame.Utils = function () { };

BasicGame.Utils.prototype = {
  // min is included, and max not
  randRange: function (min, max) {
    return Math.floor(min + Math.random() * (max - min));
  },
}

BasicGame.utils = new BasicGame.Utils();