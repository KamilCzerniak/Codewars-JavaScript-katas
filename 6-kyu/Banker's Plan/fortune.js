function fortune(f0, p, c0, n, i) {

    while (n > 0) {
        if (f0 < 0) {
            return false;
        }
        f0 += f0 * p / 100 - c0;
        c0 += c0 * i / 100;
        n--;
    }

    return true;
}