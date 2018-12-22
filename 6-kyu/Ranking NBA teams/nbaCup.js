function nbaCup(resultSheet, toFind) {

    if (toFind === "") {
        return "";
    }

    let matches = resultSheet.split(",");

    let wins = 0;
    let losses = 0;
    let draws = 0;
    let pointsScored = 0;
    let pintsConceded = 0;
    let pointsA = 0;
    let pointsB = 0;
    let arr;


    for (let i = 0; i < matches.length; i++) {
        if (matches[i].includes(".")) {
            return "Error(float number):" + matches[i];
        }

        arr = matches[i]
            .substring(0, matches[i].lastIndexOf(" "))
            .replace(/ \d+ /g, "@")
            .split("@");

        if (arr[0] === toFind || arr[1] === toFind) {

            let temp1 = matches[i].substring(arr[0].length + 1, matches[i].indexOf(arr[1]) - 1);
            let temp2 = matches[i].substring(matches[i].lastIndexOf(" ") + 1);

            if (matches[i].indexOf(toFind) === 0) {
                pointsA = Number(temp1);
                pointsB = Number(temp2);
            } else if (matches[i].indexOf(toFind) > 0) {
                pointsA = Number(temp2);
                pointsB = Number(temp1);

            }

            if (pointsA > pointsB) {
                wins++;
            } else if (pointsA < pointsB) {
                losses++;
            } else {
                draws++;
            }

            pointsScored += pointsA;
            pintsConceded += pointsB;

        }
    }

    return wins + losses + draws > 0 ? `${toFind}:W=${wins};D=${draws};L=${losses};Scored=${pointsScored};Conceded=${pintsConceded};Points=${wins * 3 + draws}`
        : toFind + ":This team didn't play!";

}
