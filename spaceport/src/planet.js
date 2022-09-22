class Planet {
  constructor(planetDetails) {
    this.name = planetDetails.name;
    this.shop = planetDetails.shop;
    this.coordinates = planetDetails.coordinates;
  }
  landShip(ship) {
    this.currentShip = ship;
  }
}

module.exports = Planet;
