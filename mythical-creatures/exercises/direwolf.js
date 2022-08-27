class Direwolf {
  constructor (name, home, size) {
    this.name = name;
    if (home == undefined) {
      this.home = 'Beyond the Wall';
    } else {
      this.home = home;
    }
    if (size == undefined) {
      this.size = 'Massive';
    } else {
      this.size = size;
    }
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.starksToProtect.length < 2) {
      if (stark.location == this.home) {
        this.starksToProtect.push(stark);
        this.huntsWhiteWalkers = false;
        stark.safe = true;
      }
    }
  }
  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i] == stark) {
        this.starksToProtect.splice(i, 1);
        stark.safe = false;
      }
    }
  }
}


module.exports = Direwolf;
