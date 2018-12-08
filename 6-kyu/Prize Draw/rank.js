function rank(st, we, n) {
    if (st.length === 0) {
        return "No participants";
    } else if (n > we.length) {
        return "Not enough participants"
    }

    let array = st.split(",");
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        map.set(array[i], array.map(c => c.toLowerCase().split("").map(char => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
            .reduce((a, b) => a + b) + c.length)[i] * we[i])
    }
    let sortedMap = new Map([...map.entries()].sort((a, b) => a[1] === b[1]
        ? a[0].toLowerCase().localeCompare(b[0].toLowerCase())
        : b[1] - a[1]));
    return [...sortedMap][n - 1][0];
}
