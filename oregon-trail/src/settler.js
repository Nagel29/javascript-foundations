class Settler {
  constructor(settlerDetails) {
    this.name = settlerDetails.name;
    this.age = settlerDetails.age;
    this.nationality = settlerDetails.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
    this.distressCounter = 0;
    this.distressStatuses = ['healthy', 'fair', 'poor', 'dead'];
  }
  experienceDistress(injury) {
    if (this.status === 'dead') {
      return;
    }
    this.distressCounter++;
    this.ailments.push(injury);
    this.status = this.distressStatuses[this.distressCounter];
  }
  heal() {
    if (this.status === 'dead') {
      return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`;
    }
    this.distressCounter = 0;
    this.ailments = [];
    this.status = 'healthy';
  }
}

module.exports = Settler;
