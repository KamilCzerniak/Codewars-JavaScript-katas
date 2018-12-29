function primeBefAft(num) {
    let result = [];
    let beforePrime = num - 1;
    let afterPrime = num + 1;

    while (!isPrime(beforePrime)) {
        beforePrime--;
    }
    result.push(beforePrime);
    while (!isPrime(afterPrime)) {
        afterPrime++;
    }
    result.push(afterPrime);
    return result;

    function isPrime(n) {

        if (n === 2) {
            return true;
        } else if (n % 2 === 0) {
            return false;
        }

        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;

    }

}