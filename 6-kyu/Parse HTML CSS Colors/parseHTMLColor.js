function parseHTMLColor(color) {

    let res = [];
    let temp = PRESET_COLORS.hasOwnProperty(color.toLowerCase())
        ? PRESET_COLORS[color.toLowerCase()].substring(1)
        : color.substring(1);

    if (temp.length === 3) {
        temp = temp.split("").map(a => a + a).join("");
    }

    for (let i = 0; i <= temp.length - 2; i += 2) {
        res.push(Number.parseInt(temp.substring(i, i + 2), 16));
    }

    return {r: res[0], g: res[1], b: res[2]}
}


