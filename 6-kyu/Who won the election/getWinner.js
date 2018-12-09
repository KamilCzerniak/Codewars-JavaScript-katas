function getWinner(listOfBallots) {

    let array = [...new Set(listOfBallots)];
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        map.set(array[i], listOfBallots.filter(a => a === array[i]).length)
    }
    let result = [...map].find(a => a[1] > listOfBallots.length / 2);
    return result === undefined ? null : result[0];
}
