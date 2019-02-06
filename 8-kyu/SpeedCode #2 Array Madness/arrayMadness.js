function arrayMadness(a, b) {
    return a.reduce((c, d) => c + d ** 2) > b.reduce((c, d) => c + d ** 3);
}