const g = 9.81;

function dist(v, mu) {
    return Math.pow(v * 1000 / 3600.0, 2) / (2 * mu * g) + v * 1000 / 3600.0;
}

function speed(d, mu) {
    return ((-1 + Math.sqrt(1 - 4 * (1 / (2 * mu * g)) * (-d))) / (2 * (1 / (2 * mu * g)))) * 3.6;
}