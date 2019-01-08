function isVow(a) {
    return a.map(a => /[aeiou]/.test(String.fromCharCode(a)) ? String.fromCharCode(a) : a);
}