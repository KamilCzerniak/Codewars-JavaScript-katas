function simpson(n) {
    let f1 = getF(Math.PI);
    let f2 = 0;
    let f3 = 0;

    for (let i = 1; i <= n / 2; i++) {
        f2 += getF((2 * i - 1) * Math.PI / n)
    }

    for (let i = 1; i <= n / 2 - 1; i++) {
        f3 += getF(2 * i * Math.PI / n);
    }

    return (Math.PI / (3.0 * n)) * (f1 + 4 * f2 + 2 * f3);


    function getF(num) {
        return 1.5 * Math.pow(Math.sin(num), 3);
    }

}