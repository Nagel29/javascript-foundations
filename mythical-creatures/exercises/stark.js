var Direwolf = require('./direwolf');

class Stark {
  constructor (familyMember) {
    this.name = familyMember.name;
    if (familyMember.area == undefined) {
      this.location = 'Winterfell';
    } else {
      this.location = familyMember.area;
    }
      this.safe = false;
  }

  sayHouseWords() {
    if (this.safe == true) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(name, home) {
    var direwolf1 = new Direwolf(name, this.location);
    direwolf1.protect(this);
    return direwolf1;
  }
}


module.exports = Stark;
