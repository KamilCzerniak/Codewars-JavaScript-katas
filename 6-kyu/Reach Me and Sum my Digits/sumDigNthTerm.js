function sumDigNthTerm(initval, patternl, nthterm) {
    let res = initval;
    let cnt = 1;
    while (cnt < nthterm) {
        res += patternl[(cnt - 1) % patternl.length];
        cnt++
    }
    return String(res).split("").map(s => Number(s)).reduce((a, b) => a + b);
}