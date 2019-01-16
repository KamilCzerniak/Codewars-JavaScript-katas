function animals(heads, legs) {
    const cows = 2 * heads - legs / 2;
    const chickens = legs / 2 - heads;

    return chickens >= 0 && cows >= 0 && Number.isInteger(cows)
        ? [cows, chickens] : "No solutions";
}
