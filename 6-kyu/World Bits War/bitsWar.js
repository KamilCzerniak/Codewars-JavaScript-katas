function bitsWar(numbers) {

    function bitCount(num) {
        return Number(Math.abs(num)).toString(2).replace(/0/g, "").length;
    }

    const res = numbers.reduce((a, b) => a + (b > 0 && b % 2 === 0 || b < 0 && b % 2 !== 0
        ? -bitCount(b) : bitCount(b)), 0);

    return res < 0 ? "evens win" : res > 0 ? "odds win" : "tie";
}

