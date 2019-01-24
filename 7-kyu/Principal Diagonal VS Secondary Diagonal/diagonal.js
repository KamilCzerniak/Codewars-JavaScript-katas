function diagonal(matrix) {

    let result = 0;
    for (let i = 0; i < matrix.length; i++) {
        result += matrix[i][i] - matrix[i][matrix[i].length - 1 - i];
    }
    return result > 0
        ? "Principal Diagonal win!"
        : result < 0
            ? "Secondary Diagonal win!"
            : "Draw!";
}
