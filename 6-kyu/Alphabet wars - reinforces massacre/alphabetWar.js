function alphabetWar(reinforces, airstrikes) {

    let cnt = [];
    for (let i = 0; i < airstrikes.length; i++) {
        if (airstrikes[i].length < reinforces[0].length && airstrikes[i].endsWith("*")) {
            airstrikes[i] += "*";
        }
        airstrikes[i] = airstrikes[i].replace(/\* /g, "**").replace(/ \*/g,"**");
    }

    for (let i = 0; i < reinforces[0].length; i++) {
        let temp = 0;
        for (let j = 0; j < airstrikes.length; j++) {
            if (airstrikes[j][i] === "*") {
                temp++;
            }
        }
        cnt.push(temp);
    }

    let res = "";
    for (let i = 0; i < cnt.length; i++) {
        if (cnt[i] >= reinforces.length) {
            res += "_";
        } else {
            res += reinforces[cnt[i]][i];
        }
    }
    return res;
}
