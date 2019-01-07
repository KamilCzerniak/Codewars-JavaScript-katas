function iterPi(epsilon) {

    let number = 1;
    let i = 0;
    let j = 1;
    while (Math.abs(Math.PI - number * 4) > epsilon) {
        number -= (1 / (3 + 2 * i)) * j;
        i++;
        j *= -1;
    }
    return [i + 1, Number((number * 4).toFixed(10))];
}

