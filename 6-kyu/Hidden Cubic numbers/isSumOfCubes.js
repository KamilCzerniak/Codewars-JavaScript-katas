function isSumOfCubes(s) {

    let cubicNumbers = [];
    let arr = s.replace(/[^\d]/g, " ").trim().split(/\s+/);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j += 3) {
            let temp = arr[i].substring(j, Math.min(j + 3, arr[i].length));
            if (isCubicNumber(temp)) {
                cubicNumbers.push(Number(temp));
            }
        }
    }

    return cubicNumbers.length === 0 ? "Unlucky" : `${cubicNumbers.join(" ")} ${cubicNumbers
        .reduce((a, b) => a + b)} Lucky`;


    function isCubicNumber(s) {
        return Number(s) === s.split("")
            .map(a => Math.pow(Number(a), 3))
            .reduce((a, b) => a + b);

    }
}