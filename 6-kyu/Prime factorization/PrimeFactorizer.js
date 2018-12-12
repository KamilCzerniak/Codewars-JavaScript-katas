function PrimeFactorizer(n) {

    this.factor = getFactor(n);

    function getFactor(n) {
        let res = {};
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i === 0) {
                if (!res.hasOwnProperty(i)) {
                    res[i] = 0;
                }
                res[i]++;
                n /= i;
            }
        }

        if (n !== 1) {
            if (!res.hasOwnProperty(n)) {
                res[n] = 0;
            }
            res[n]++;
        }

        return res;
    }
}

