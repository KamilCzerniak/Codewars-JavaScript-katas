function sortTwisted37(array) {

    function swap(num) {
        return Number(String(num).replace(/7/g, "@")
            .replace(/3/g, "7")
            .replace(/@/g, "3"))
    }

    return array.slice(0).sort((a, b) => swap(a) - swap(b));
}