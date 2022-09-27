class Planet {
  constructor(planetDetails) {
    this.name = planetDetails.name;
    this.shop = planetDetails.shop;
    this.coordinates = planetDetails.coordinates;
  }
  landShip(ship) {
    this.currentShip = ship;
  }
  calculateDistance(otherPlanet) {
    var distance = 0;
    var xDiff = (otherPlanet.coordinates.x - this.coordinates.x);
    var yDiff = (otherPlanet.coordinates.y - this.coordinates.y);
    var zDiff = (otherPlanet.coordinates.z - this.coordinates.z);
    distance = (Math.sqrt((xDiff * xDiff) + (yDiff * yDiff) + (zDiff * zDiff)));
    return distance;
  }
  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }
  giveClearance(otherPlanet) {
    if (this.currentShip.fuel === 0) {
      return "Clearance denied: Cannot fly without fuel";
    }
    this.currentShip.fuel = 0;
    otherPlanet.currentShip = this.currentShip;
    this.currentShip = undefined;
    return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`
  }
}

module.exports = Planet;
