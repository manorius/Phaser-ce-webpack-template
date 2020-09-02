import "./js/states/Base"
import "./js/states/Boot"
import "./js/states/Preloader"
import "./js/states/MainScene"
import "../assets/css/style.css"

var realWidth, realHeight;
var game;

(function () {

  var width = window.innerWidth * window.devicePixelRatio;
  var height = window.innerHeight * window.devicePixelRatio;

  var ws = width / 900;
  var hs = height / 1600;
  window.offsetX = 0;
  window.offsetY = 0;

  if (ws < hs) {
    window.offsetY = (height - 1600 * width / 900) / 2;
  } else {
    window.offsetX = (width - 900 * height / 1600) / 2;
  }
  game = new Phaser.Game(width, height, Phaser.AUTO, 'game');

  // Add states
  game.state.add('Boot', BasicGame.Boot);
  game.state.add('Preloader', BasicGame.Preloader);
  game.state.add('MainScene', BasicGame.MainScene);

  // Now start the Boot state.
  game.state.start('Boot');
  BasicGame.game = game;

})();

