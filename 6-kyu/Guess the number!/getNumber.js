Guesser.prototype.getNumber = function () {

    let start = 1;
    let end = 1000;
    let num = 500;
    let result = "";

    while (!result.match("Correct!")) {

        result = this.guess(num);
        if (result.match("Too high!")) {
            end = num;
        } else if (result.match("Too low!")) {
            start = num;
        }
        num = Math.floor((start + end) / 2);
    }
    return num;
};