function solve(str, idx) {
    if (str[idx] !== "(") {
        return -1;
    }

    let cnt = 1;
    for (let i = idx + 1; i < str.length; i++) {
        cnt += str[i] === "(" ? 1 : str[i] === ")" ? -1 : 0;
        if (cnt === 0) {
            return i;
        }
    }
    return -1;
}