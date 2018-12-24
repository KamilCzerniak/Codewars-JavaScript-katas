function posAverage(s) {

    let arr = s.split(", ");
    let commonPosition = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = 0; k < arr[i].length; k++) {
                if (arr[i][k] === arr[j][k]) {
                    commonPosition++;
                }
            }
        }
    }

    return commonPosition / (arr.length * (arr.length - 1) / 2) * 100 / arr[0].length;
}