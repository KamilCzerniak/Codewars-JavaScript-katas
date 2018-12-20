function dbSort(a) {
    return a.filter(x => typeof x === "number").sort((x, y) => x - y).concat(a.filter(y => typeof y === "string").sort());
}

