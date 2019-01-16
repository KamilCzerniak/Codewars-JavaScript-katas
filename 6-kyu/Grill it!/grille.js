function grille(message, code) {
    let res = [];
    const binNumber = Number(code).toString(2);
    for (let i = 0; i < Math.min(message.length, binNumber.length); i++) {
        if (binNumber[binNumber.length - i - 1] === "1") {
            res.unshift(message[message.length - i - 1]);
        }
    }
    return res.join("");
}
