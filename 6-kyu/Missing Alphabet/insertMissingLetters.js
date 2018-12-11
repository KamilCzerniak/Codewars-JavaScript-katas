function insertMissingLetters(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let s = [...new Set(str)];
    for (let i = 0; i < s.length; i++) {
        str = str.replace(s[i], s[i] + alphabet.substring(alphabet.indexOf(s[i]))
            .split("")
            .filter(c => !s.includes(c))
            .join("")
            .toUpperCase());

    }
    return str;
}
