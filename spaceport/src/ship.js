class Ship {
  constructor(shipDetails) {
    this.name = shipDetails.name;
    this.type = shipDetails.type;
    this.maxCrew = shipDetails.maxCrew;
    this.odometer = shipDetails.odometer || 0;
    this.fuelCapacity = shipDetails.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = shipDetails.captain;
    this.crew = [];
    this.cargo = [];
    if (shipDetails.parts) {
      this.parts = shipDetails.parts;
    } else {
        this.parts = {};
      }
    this.readyToFly = false;
  }

  addCrew(crew) {
    for (var i = 0; i < crew.length; i++) {
      if (this.crew.length < this.maxCrew && crew[i].constructor.name === 'Being') {
      this.crew.push(crew[i]);
      }
    }
  }
  loadCargo(cargo) {
    if (cargo.constructor.name === 'Part') {
      this.cargo.push(cargo)
    }
  }
  updatePart(part) {
    if (this.parts[part.type]) {
      var oldPartValue = this.parts[part.type].value;
      var newPartValue = part.value;
      this.parts[part.type] = part;
      return oldPartValue - newPartValue;
    } else {
      this.parts[part.type] = part;
    }
  }
  checkReadiness() {
    if (!this.captain) {
      return 'Cannot fly without a captain';
    }
    if (this.fuel === 0) {
      return 'Cannot fly without fuel';
    }
    if (Object.keys(this.parts).length === 0) {
      return 'Cannot fly without parts';
    }
    this.readyToFly = true;
    return 'Good to go!';
  }
}

module.exports = Ship;
