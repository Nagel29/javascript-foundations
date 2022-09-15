class SkatePark {
  constructor(parkDetails) {
    this.name = parkDetails.name;
    this.yearFounded = parkDetails.year;
    this.style = parkDetails.type;
    this.features = parkDetails.features;
    if (parkDetails.isPrivate) {
      this.isPrivate = parkDetails.isPrivate;
    } else {
      this.isPrivate = false;
    }
    if (parkDetails.price) {
      this.cost = parkDetails.price;
    } else {
      this.cost = 0;
    }
    this.occupants = [];
  }
  admit(skater) {
    if (this.isPrivate && skater.money >= this.cost && this.occupants.length < 3) {
      skater.money -= this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be ${'$' + this.cost.toFixed(2)}.`;
    } else if (skater.money < this.cost) {
        return 'Sorry, you don\'t have enough money.'
      } else if (this.occupants.length === 3) {
          return 'Sorry, we are at max capacity. Thank you for understanding.';
        } else {
            this.occupants.push(skater);
            return `Welcome to the free ${this.name} Skatepark!`;
          }
  }
}

module.exports = SkatePark;
