function rotate(array, n) {

    let res = new Array(array.length);
    for (let i = 0; i < res.length; i++) {
        res[i] = array[(i + array.length - n % array.length) % array.length];
    }
    return res;
}
