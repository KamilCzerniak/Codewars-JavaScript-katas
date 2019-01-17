function parseF(s) {
    let res = Number.parseFloat(s);
    return Number.isNaN(res) ? null : res;
}