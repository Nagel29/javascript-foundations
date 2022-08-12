class Vampire {
  constructor (name, pet) {
    this.name = name;
    if (pet === undefined) {
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
    this.ouncesDrank = 0;
    this.thirsty = true;
  }
  drink() {
    if (this.ouncesDrank >= 50) {
      return 'I\'m too full to drink anymore!';
    } else if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
      } if (this.ouncesDrank > 0) {
          this.thirsty = false;
        } else {
          this.thirsty = true;
          }
  }
}

module.exports = Vampire;
