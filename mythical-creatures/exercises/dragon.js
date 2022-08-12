class Dragon {
  constructor (name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    hungryCount++;
    if (hungryCount >= 3) {
      this.hungry = false;
    } else {
      this.hungry = true;
    }
    }
}
let hungryCount = 0


module.exports = Dragon;
