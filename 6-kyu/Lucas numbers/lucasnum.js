function lucasnum(n) {
    if (n === 0) {
        return 2;
    } else if (n === 1 || n === -1) {
        return n;
    }

    let temp1 = 2;
    let temp2 = 1;
    let res;

    for (let i = 2; i <= Math.abs(n); i++) {
        res = temp1 + temp2;
        temp1 = temp2;
        temp2 = res;
    }
    return n < 0 && n % 2 !== 0 ? -res : res;
}
