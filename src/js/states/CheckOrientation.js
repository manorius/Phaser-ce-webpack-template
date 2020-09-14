BasicGame.CheckOrientation = function(game) {};

BasicGame.CheckOrientation.prototype = {

  create: function() {console.log(BasicGame)},

  update: function() {
    if (BasicGame.orientated) {
      this.state.start('Preloader');
    }
  }

};
