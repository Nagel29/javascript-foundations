class Wagon {
  constructor(wagonDetails) {
    this.title = wagonDetails.name;
    this.wheels = wagonDetails.wheels || [];
    this.axles = wagonDetails.axles || [];
    this.oxen = wagonDetails.oxen || [];
    this.yokes = wagonDetails.yokes || [];
    this.food = wagonDetails.food;
    this.ammunition = wagonDetails.ammunition;
    this.clothes = wagonDetails.clothes;
    this.settlers = wagonDetails.settlers || [];
  }
  addPart(part) {
    var type = part.type + 's';
    if (part.type === 'ox') {
      type = 'oxen';
    }
    this[type].push(part);
  }
  makeValidWagon() {
  
  }
  canTravel() {
    if (this.wheels.length >= 4 && this.axles.length >=2 && this.oxen.length >= 2 && this.yokes.length === 0 && this.settlers.length === 0) {
      return true;
    }
    return false;
  }
}

module.exports = Wagon;
