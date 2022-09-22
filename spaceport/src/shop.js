class Shop {
  constructor(shopDetails) {
    this.name = shopDetails.name;
    this.inventory = {};
  }
  addInventory(item) {
    if (item.constructor.name === 'Part' || item.constructor.name === 'Food') {
    this.inventory[item.type] = item;
    }
  }
  outfitShip(ship, inventoryItem) {
    if (!ship.captain) {
      return 'cannot outfit a ship without a captain';
    }
    if (ship.captain.credits < this.inventory[inventoryItem].value) {
      return `you require ${this.inventory[inventoryItem].value - ship.captain.credits} more credits to make this purchase`;
    } else {
      ship.captain.credits -= this.inventory[inventoryItem].value;
      ship.updatePart(this.inventory[inventoryItem]);
      this.inventory[inventoryItem] = undefined;
      return `${inventoryItem} added to ship`;
    }
  }
}

module.exports = Shop;
