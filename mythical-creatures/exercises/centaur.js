class Centaur {
  constructor (centaur) {
  this.name = centaur.name;
  this.breed = centaur.type;
  this.crankyCount = 0;
  if (this.crankyCount < 3) {
    this.cranky = false;
  } else {
    this.cranky = true;
    }
  this.standing = true;
  this.layingDown = false;

  }

  shootBow() {
    if (this.cranky === false && this.layingDown === false) {
      this.crankyCount += 1;
      if (this.crankyCount >= 3) {
        this.cranky = true;
      }
      return 'Twang!!!';
    } else {
        return 'NO!';
      }
  }
  run() {
    if (this.cranky === false && this.layingDown === false) {
      this.crankyCount += 1;
      if (this.crankyCount >= 3) {
        this.cranky = true;
      }
      return 'Clop clop clop clop!!!';
    } else {
      return 'NO!';
      }
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else {
        this.cranky = false;
        return 'ZZZZ';
      }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!';
      }
  }
}



module.exports = Centaur;
