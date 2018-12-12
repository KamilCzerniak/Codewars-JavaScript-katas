function PrimeFactorizer(n) {

    let getFactor = function () {
        let res = {};
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i === 0) {
                if (!res.hasOwnProperty(i)) {
                    res[i] = 0;
                }
                res[i] = res[i] + 1;
                n /= i;
            }
        }

        if (n !== 1) {
            if (!res.hasOwnProperty(n)) {
                res[n] = 0;
            }
            res[n] = res[n] + 1;
        }
        return res;

    };

    this.factor = getFactor();

}

