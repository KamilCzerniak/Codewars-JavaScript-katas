function gcdi(x, y) {
    return y === 0 ? x : gcdi(Math.abs(y), Math.abs(x) % Math.abs(y));
}

function lcmu(a, b) {
    return Math.abs(a * b) / gcdi(a, b);
}

function som(a, b) {
    return a + b;
}

function maxi(a, b) {
    return Math.max(a, b);
}

function mini(a, b) {
    return Math.min(a, b);
}

function operArray(fct, arr, init) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fct(i === 0 ? init : result[i - 1], arr[i]))
    }
    return result;
}

