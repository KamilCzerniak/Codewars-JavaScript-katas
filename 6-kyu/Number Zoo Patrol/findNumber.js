function findNumber(array) {
    return ((array.length + 2) * (array.length + 1) / 2) - array.reduce((a, b) => a + b, 0);
}