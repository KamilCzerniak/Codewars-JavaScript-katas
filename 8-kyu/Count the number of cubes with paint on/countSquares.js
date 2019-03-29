const countSquares = function (cuts) {
    return cuts ? (cuts + 1) ** 3 - (cuts - 1) ** 3 : 1;
};
