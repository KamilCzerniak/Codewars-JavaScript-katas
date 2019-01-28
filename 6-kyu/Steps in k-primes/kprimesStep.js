function kprimesStep(k, step, start, nd) {

    let res = [];
    for (let i = start; i <= nd - step; i++) {
        if (isKPrime(i) && isKPrime(i + step)) {
            res.push([i, i + step]);
        }
    }
    return res;


    function isKPrime(num) {
        let cnt = 0;
        for (let i = 2; i <= Math.sqrt(num); i += i === 2 ? 1 : 2) {
            while (num % i === 0) {
                cnt++;
                num /= i;
            }
        }
        return num > 1 ? cnt + 1 === k : cnt === k;
    }

}