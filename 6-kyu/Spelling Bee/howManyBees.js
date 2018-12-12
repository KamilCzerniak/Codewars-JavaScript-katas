howManyBees = function (hive) {
    if (hive === null || hive.length === 0) {
        return 0;
    }
    let cnt = 0;
    for (let i = 0; i < hive.length; i++) {
        for (let j = 0; j < hive[i].length - 2; j++) {
            let row = hive[i][j] + hive[i][j + 1] + hive[i][j + 2];
            if (row.match(new RegExp("bee|eeb"))) {
                cnt++;
            }
        }
    }

    for (let i = 0; i < hive[0].length; i++) {
        for (let j = 0; j < hive.length - 2; j++) {
            let column = hive[j][i] + hive[j + 1][i] + hive[j + 2][i];
            if (column.match(new RegExp("bee|eeb"))) {
                cnt++;
            }
        }
    }
    return cnt
};