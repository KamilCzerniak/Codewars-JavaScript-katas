function pigLatin(string) {
    string = string.toLowerCase();
    if ((/[^a-z]/g).test(string)) {
        return null;
    } else if (string[0].match(/[aeiou]/g)) {
        return string + "way";
    } else {
        let index = string.search(/[aeiou]/);
        return string.substring(index) + string.substring(0, index) + "ay";
    }
}

console.log(pigLatin("spaghetti"));