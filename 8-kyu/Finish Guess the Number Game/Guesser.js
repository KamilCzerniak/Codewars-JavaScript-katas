class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives === 0) {
            throw "You are dead! Number of attempts is over the limit";
        } else if (n === this.number) {
            return true;
        }
        this.lives--;
        return false;
    }
}

