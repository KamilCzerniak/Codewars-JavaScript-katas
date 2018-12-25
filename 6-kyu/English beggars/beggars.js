function beggars(values, n) {

    let res = Array(n).fill(0);
    for (let i = 0; i < values.length; i++) {
        res[i % n] += values[i];
    }

    return res;
}