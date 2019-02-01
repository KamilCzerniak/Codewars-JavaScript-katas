function uniTotal(str) {
    return str.split("").map(s => s.charCodeAt(0)).reduce((a, b) => a + b, 0);
}

