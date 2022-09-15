class TrickOrTreater {
  constructor(costume, bag) {
    this.costume = costume;
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy) {
    this.hasCandy = true;
    // this.bag.fill() =
    this.bag.fill();
    this.countCandies = this.bag.count;
  }
  eat() {
    this.countCandies -= 1;
    this.bag.count = this.countCandies;
    this.bag.candies.shift();
  }
}

module.exports = TrickOrTreater;
