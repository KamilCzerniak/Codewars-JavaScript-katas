function encrypt(text, rule) {

    return text.split("").map(a => String.fromCharCode((a.charCodeAt(0) + rule) % 256)).join("");
}