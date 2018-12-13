function findSquares(x, y) {
    let res = 0;
    while (y > 0) {
        res += x * y;
        x--;
        y--;
    }
    return res;
}