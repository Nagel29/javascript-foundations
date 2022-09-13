var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(thing, value) {
    this.materials[thing] += value;
  }
  buildASnowman() {
    var snowman = new Snowman(this.materials);
    this.snowman = snowman;
    return snowman;
  }
  placeMagicHat() {
    return this.snowman.magicHat? 'Woah, this snowman is coming to life!' : 'I guess I didn\'t build it correctly.';
  }

}

module.exports = Human;
