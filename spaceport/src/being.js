class Being {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.isAlive = true;
    this.credits = 0;
  }
  updateCredits(credits) {
    this.credits += credits;
  }
}

module.exports = Being;
