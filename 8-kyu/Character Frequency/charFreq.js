function charFreq(message) {
    let res = {};
    for (let i = 0; i < message.length; i++) {
        if (!res.hasOwnProperty(message[i])) {
            res[message[i]] = 0;
        }
        res[message[i]]++;
    }
    return res;
}