function numericals(s) {
    let res = "";
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 0);
        }
        map.set(s[i], map.get(s[i]) + 1);
        res += map.get(s[i]);
    }
    return res;
}