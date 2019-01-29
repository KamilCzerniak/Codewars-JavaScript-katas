var hotpo = function (n) {

    if (n === 0) return 0;
    let cnt = 0;
    while (n !== 1) {
        n = n % 2 ? 3 * n + 1 : n / 2;
        cnt++;
    }
    return cnt;
};

