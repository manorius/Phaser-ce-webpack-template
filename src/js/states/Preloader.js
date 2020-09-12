BasicGame.Preloader = function (game) {
  this.ready = 0;
};

BasicGame.Preloader.prototype = {
  init: function () {

  },
  preload: function () {
    var version = BasicGame.version;
    this.load.onLoadComplete.add(this.loadComplete, this);

    this.load.image('phaser-logo', '../assets/images/phaser-logo.png' + '?v=' + version);
    this.load.image('background', '../assets/images/background.jpg' + '?v=' + version);
  },

  create: function () {


  },

  update: function () {

  },
  loadComplete: function () {
    console.log(this.state)
    this.state.start('MainScene');
  },
  nextPage: function () {

  },

  render: function () {

  },

  onTerms: function () {

  }
};
