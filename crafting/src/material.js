class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }
  useMaterial(amount) {
    if (amount > this.amount) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
    }
    this.amount -= amount;
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
  }
  calculateMaterialCost() {
    var totalCost = this.price * this.amount;
    return totalCost;
  }
}

module.exports = Material;
