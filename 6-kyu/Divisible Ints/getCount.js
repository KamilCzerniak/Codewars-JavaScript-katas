function getCount(n) {
    let cnt = 0;
    let num = n.toString();
    for (let i = 1; i < num.length; i++) {
        for (let j = 0; j + i <= num.length; j++) {
            let temp = Number(num.substring(j, j + i));
            if (temp !== 0 && n % temp === 0) {
                cnt++;
            }
        }
    }
    return cnt;
}
