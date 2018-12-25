function notPrimes(a, b) {

    let result = [];
    for (let i = a; i < b; i++) {
        if (String(i).search(/[014689]/) === -1 && !isPrime(i)) {
            result.push(i);
        }


    }

    return result;

    function isPrime(num) {
        if (num === 2) {
            return true;
        } else if (num % 2 === 0) {
            return false
        }


        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;

    }

}