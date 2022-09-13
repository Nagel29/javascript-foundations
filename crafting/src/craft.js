class Craft {
  constructor(craftDetails) {
    this.name = craftDetails.type;
    this.materials = craftDetails.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }
  calculateProjectTotal() {
    var totalCost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      totalCost += this.materials[i].price * this.materials[i].amount;
    }
    return totalCost;
  }
}

module.exports = Craft;
