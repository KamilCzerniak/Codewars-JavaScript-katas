function countSpecMult(n, mxval) {

    let temp = 2;
    for (let i = 3; n > 1; i += 2) {
        if (isPrime(i)) {
            temp *= i;
            n--;
        }
    }

    return Math.floor(mxval / temp);


    function isPrime(num) {

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}