function epidemic(tm, n, s0, i0, b, a) {

    let max = 0;
    let i1 = 0;
    let s1 = 0;
    let dt = tm / n;

    while (i1 >= max) {
        max = i1;
        s1 = s0 - dt * b * s0 * i0;
        i1 = i0 + dt * (b * s0 * i0 - a * i0);
        i0 = i1;
        s0 = s1;
    }
    return max;
}