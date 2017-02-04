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
        if(this.min<this.max) {
             this.max = Math.round((this.max + this.min) / 2);
        }else{
            this.min = Math.round((this.max + this.min) / 2);
}
    }

    greater() {
        if(this.min<this.max) {
            this.min = Math.round((this.max + this.min) / 2);
        } else{
            this.max = Math.round((this.max + this.min) / 2);
        }
    }
}

module.exports = GuessingGame;
