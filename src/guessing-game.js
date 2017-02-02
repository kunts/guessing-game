class GuessingGame {

    constructor() {


    }

    setRange(min, max) {
        this.min = min;
        this.max = max;



    }

    guess() {
        var mid = Math.round((this.max+this.min)/2);
  return mid;
    }

    lower() {
    this.max= Math.round((this.max+this.min)/2);
    }

    greater() {
        this.min= Math.round((this.max+this.min)/2);
    }
}

module.exports = GuessingGame;
