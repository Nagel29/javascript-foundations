class LunchBox {
  constructor(ownerDetails) {
    this.owner = ownerDetails.owner;
    this.material = ownerDetails.madeOf;
    this.shape = ownerDetails.shape;
    this.color = ownerDetails.color;
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var healthySnacks = [];
    // console.log(this.snacks[1]);
    // console.log(this.snacks[1].checkForHealthy);
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
