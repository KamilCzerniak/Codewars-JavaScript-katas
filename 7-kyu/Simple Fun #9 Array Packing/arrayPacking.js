function arrayPacking(a) {
    return parseInt(a.reverse()
        .map(i => i.toString(2))
        .map(s => '00000000'.substring(0, 8 - s.length) + s)
        .join(''),2);
}
