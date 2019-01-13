function solve(x, y) {

    let cnt = 0;
    for (let i = x; i < y; i++) {
        if (i.toString().replace(/[01689]/g, "").length === 0 && isRotatable(i)) {
            cnt++;
        }
    }

    return cnt;

    function isRotatable(num) {
        return num === +num
            .toString()
            .split("")
            .reverse()
            .join("")
            .replace(/6/g, "#")
            .replace(/9/g, "6")
            .replace(/#/g, "9");
    }
}
