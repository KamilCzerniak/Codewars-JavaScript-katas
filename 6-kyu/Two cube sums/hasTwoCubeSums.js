function hasTwoCubeSums(n) {
    let cnt = 0;
    let limit = Math.cbrt(n);
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        for (let j = i; j <= limit; j++) {
            sum = Math.pow(i, 3) + Math.pow(j, 3);
            if (sum === n) {
                cnt++;
            }
        }
    }
    return cnt > 1;
}
