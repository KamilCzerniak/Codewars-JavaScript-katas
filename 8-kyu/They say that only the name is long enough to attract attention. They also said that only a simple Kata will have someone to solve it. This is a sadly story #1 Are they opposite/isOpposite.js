function isOpposite(s1, s2) {

    function isUpperCase(s) {
        return s === s.toUpperCase();
    }

    return s1.length > 0
        && s2.length > 0
        && s1 === s2.split("").map(a => isUpperCase(a) ? a.toLowerCase() : a.toUpperCase()).join("");
}
