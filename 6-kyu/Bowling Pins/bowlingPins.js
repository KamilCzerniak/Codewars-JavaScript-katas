function bowlingPins(arr) {

    let pins = arr.map(a => [27, 18, 20, 9, 11, 13, 0, 2, 4, 6][a - 1]);
    let res = "";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 7; j++) {
            if (j <= 7 - i - 1
                && j >= i
                && (i % 2 == 0 ? j % 2 == 0 : j % 2 != 0)
                && !pins.includes(i*8 + j)){
                res += "I";
            } else {
                res += " ";
            }
        }
        if (i !== 3) {
            res += "\n";
        }
    }
    return res;
}

