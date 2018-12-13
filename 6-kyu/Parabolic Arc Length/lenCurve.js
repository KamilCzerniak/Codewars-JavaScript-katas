function lenCurve(n) {

    let dx = 1 / n;
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.sqrt(Math.pow(dx, 2) + Math.pow(Math.pow(dx * (i + 1), 2) - Math.pow(dx * i, 2), 2));
    }
    return Math.floor(res * 10e8) / 10e8;
}
