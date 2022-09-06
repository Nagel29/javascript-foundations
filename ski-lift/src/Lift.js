var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, hasLiftTicket) {
    if (!hasLiftTicket) {
      return `Sorry, ${name}. You need a lift ticket!`;
    }
    if (this.skiers.length < this.limit) {
        var skier = new Skier(name, hasLiftTicket);
        this.skiers.push(skier);
    }
      return `Sorry, ${name}. Please wait for the next lift!`;
  }

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    }
    var openSeats = this.limit - this.skiers.length;
    if (openSeats > 1) {
      return `We still need ${openSeats} more skiers!`;
    }
      return `We still need ${openSeats} more skier!`;
  }
}

module.exports = Lift;
