class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    if (!ogre.abode) {
      this.home = 'Swamp';
    } else {
      this.home = ogre.abode;
      }
    this.swings = 0;
  }

  swingAt(human) {
    this.swings++;
    if (this.swings % 2 === 0) {
      human.knockedOut = true;
    }
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre()) {
      this.swingAt(human);
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }


}


module.exports = Ogre;
