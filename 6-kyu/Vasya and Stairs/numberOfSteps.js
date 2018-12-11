function numberOfSteps(steps, m) {

    for (let i = Math.ceil(steps / 2); i <= steps; i++) {
        if (i % m === 0) {
            return i;
        }
    }
    return -1;
}