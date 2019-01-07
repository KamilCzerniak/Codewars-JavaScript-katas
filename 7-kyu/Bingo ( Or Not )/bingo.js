function bingo(a) {
    return [...new Set(a)]
        .filter(a => /[BINGO]/.test(String.fromCharCode('A'.charCodeAt(0) - 1 + a)))
        .length === 5 ? "WIN" : "LOSE";

}