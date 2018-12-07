function isAlt(word) {
    let vowels = "aeiou";
    for (let i = 0; i < word.length - 1; i++) {
        if (vowels.indexOf(word[i]) !== -1 && vowels.indexOf(word[i + 1]) !== -1
            || vowels.indexOf(word[i]) === -1 && vowels.indexOf(word[i + 1]) === -1) {
            return false;
        }
    }
    return true;
}