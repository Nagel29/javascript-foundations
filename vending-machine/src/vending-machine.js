class VendingMachine {
  constructor(machineDetails) {
    this.id = machineDetails.id;
    this.isBroken = machineDetails.isBroken;
    this.snacks = [];
  }
  addSnacks(snack) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        return `Sorry, that snack is already stocked! Try adding a different snack.`;
      }
    }
    this.snacks.push(snack);
  }
  purchaseSnack(name, moneyPaid) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === name && this.snacks[i].itemsInStock <= 0) {
        return `Sorry, no items in stock. Try another item.`;
      } else if (this.snacks[i].name === name && this.snacks[i].itemsInStock > 0 && moneyPaid < this.snacks[i].price) {
        return `Sorry, not enough payment. Please add more money.`;
        } else if (this.snacks[i].name === name && this.snacks[i].itemsInStock > 0 && moneyPaid >= this.snacks[i].price) {
          this.snacks[i].itemsInStock -= 1;
          var changeCalc = moneyPaid - this.snacks[i].price;
          return `Success! Here is ${'$' + changeCalc} back!`;
          }
    }
  }
}

module.exports = VendingMachine;
