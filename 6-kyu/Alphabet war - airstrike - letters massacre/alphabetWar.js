function alphabetWar(fight) {

    let power = "wpbs@zdqm";
    let res = fight
        .replace(/\*[a-z]/g, "**")
        .replace(/[a-z]\*/g, "**")
        .split("")
        .map(a => power.indexOf(a) !== -1 ? power.indexOf(a) - 4 : 0)
        .reduce((a, b) => a + b);
    return res < 0 ? "Left side wins!" : res > 0 ? "Right side wins!" : "Let's fight again!";
}
