function peacefulYard(yard, minDistance) {

    let catCoordinates = [];
    for (let i = 0; i < yard.length; i++) {
        for (let j = 0; j < yard[i].length; j++) {
            if (yard[i][j] !== '-') {
                catCoordinates.push([j, i]);
            }
        }
    }

    for (let i = 0; i < catCoordinates.length - 1; i++) {
        for (let j = i + 1; j < catCoordinates.length; j++) {
            let a = catCoordinates[i];
            let b = catCoordinates[j];
            if (Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2)) < minDistance) {
                return false;
            }
        }
    }
    return true;
}
