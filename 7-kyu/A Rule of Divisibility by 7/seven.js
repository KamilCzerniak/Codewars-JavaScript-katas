function seven(m) {

    let counter = 0;
    while (m > 99) {
        m = Math.floor(m / 10) - (m % 10) * 2;
        counter++;
    }
    return [m, counter];
}
