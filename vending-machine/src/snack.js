class Snack {
 constructor(name, unitPrice) {
   this.name = name;
   this.price = unitPrice;
   this.itemsInStock = 0;
 }
 stockItems(quantity) {
   this.itemsInStock += quantity;
 }
 removeItem() {
  if (this.itemsInStock) {
    this.itemsInStock -= 1;
    return `Item taken! There are now ${this.itemsInStock} items left.`;
  }
  return `Sorry, no ${this.name} left in stock!`;
  }
}

module.exports = Snack;
