function numPrimorial(n) {
    let result = 1;
    for (let i = 2; n > 0; i++) {
        if (isPrime(i)) {
            result *= i;
            n--;
        }
    }

    return result;

    function isPrime(num) {
        if (num !== 2 && num % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
