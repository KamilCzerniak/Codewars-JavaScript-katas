function backwardsPrime(start, stop) {


    let res = [];
    for (let i = start; i <= stop; i++) {
        let reversed = i.toString().split("").reverse().join("");
        if (i % 2 !== 0
            && isPrime(i)
            && i.toString() !== reversed
            && isPrime(Number(reversed))) {
            res.push(i);
        }
    }
    return res.join("");


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