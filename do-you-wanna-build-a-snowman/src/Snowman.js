class Snowman {
  constructor(snowmanDetails) {
    this.carrots = snowmanDetails.carrots;
    this.coal = snowmanDetails.coal;
    this.snowballs = snowmanDetails.snowballs;
    this.buttons = snowmanDetails.buttons;
    this.magicHat = false;
  }
  canWearMagicHat() {
    
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false;
    } else {this.magicHat = true;}
  }

}

module.exports = Snowman;
