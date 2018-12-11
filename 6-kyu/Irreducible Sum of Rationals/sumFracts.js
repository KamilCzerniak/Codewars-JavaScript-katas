function sumFracts(l) {
    if (l.length === 0) {
        return null;
    }
    let denom = l.map(a => a[1]).reduce((a, b) => a * b, 1);
    let numer = l.map(a => a[0] * denom / a[1]).reduce((a, b) => a + b);

    return numer % denom === 0
        ? numer / denom
        : [numer / gcd(numer, denom), denom / gcd(numer, denom)];

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
}
