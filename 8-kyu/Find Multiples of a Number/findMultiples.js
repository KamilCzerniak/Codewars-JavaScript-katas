function findMultiples(integer, limit) {

    let res = [];
    for (let i = integer; i <= limit; i += integer) {
        res.push(i);
    }
    return res;
}

