function sumOfDifferences(arr) {
    const temp = arr.sort((a, b) => b - a);
    let res = 0;
    for (let i = 0; i < temp.length - 1; i++) {
        res += temp[i] - temp[i + 1];
    }
    return res;
}