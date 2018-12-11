function pigLatin(string) {
    string = string.toLowerCase();
    if ((/[^a-z]/g).test(string)) {
        return null;
    } else if (s[0].match(/[aeiou]/g)) {
        return s + "way";
    } else {
        let index = s.search(/[aeiou]/);
        return s.substring(index) + s.substring(0, index) + "ay";
    }
}