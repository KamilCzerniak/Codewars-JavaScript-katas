function helpZoom(key) {
    for (let i = 0; i < key.length; i++) {
        if (key[i] !== key[key.length - 1 - i]) {
            return "No";
        }
    }
    return "Yes"
}