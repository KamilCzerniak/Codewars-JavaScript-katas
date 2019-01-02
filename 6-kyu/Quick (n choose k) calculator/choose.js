function choose(n, k) {
    let res = 1;
    for (let i = 0; i < k; i++) {
        res = (res * (n - i)) / (i + 1);
    }
    return Math.round(res);
}