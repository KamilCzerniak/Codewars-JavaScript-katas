function points(games) {
    return games.map(a => a[0] > a[2] ? 3 : a[0] === a[2] ? 1 : 0).reduce((a, b) => a + b);
}

