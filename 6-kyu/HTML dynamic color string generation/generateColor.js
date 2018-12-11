var generateColor = function () {
    let res = "#";
    for (let i = 0; i < 6; i++) {
        res += Math.floor(Math.random() * 17).toString(16);
    }
    return res;
};