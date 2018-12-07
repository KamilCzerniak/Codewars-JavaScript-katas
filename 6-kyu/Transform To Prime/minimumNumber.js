function minimumNumber(numbers) {
    let sum = numbers.reduce((a, b) => a + b);
    let res = 0;

    while (!isPrime(sum + res)) {
        res++;
    }

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }

    return res;

}