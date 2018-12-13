var countDeafRats = function (town) {

    let deafRats = 0;
    let arr = town.replace(/ /g, "").split("P");

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j += 2) {
            if (i === 0 && arr[i].substring(j, j + 2).match("O~")
                || i === 1 && arr[i].substring(j, j + 2).match("~O")) {
                deafRats++;
            }
        }
    }
    return deafRats;
};
