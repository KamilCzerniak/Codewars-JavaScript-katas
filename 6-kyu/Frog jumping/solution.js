function solution(a) {
    if (a.length === 0) {
        return -1;
    } else if (a[0] < 0) {
        return 1;
    }
    let indexes = [0];
    let jump = 0;
    for (let i = 0; i >= 0 && i < a.length; jump++) {
        i += a[i];
        if (indexes.includes(i)) {
            return -1;
        }
        indexes.push(i);
    }
    return jump;
}