function multiTable(number) {
    let res = [];
    for (let i = 1; i <= number; i++) {
        res.push(`${i} * ${number} = ${i * number}`);
    }
    return res.join("\n");
}