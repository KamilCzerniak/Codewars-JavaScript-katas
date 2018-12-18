function balance(book) {
    let arr = book.replace(/[^a-zA-Z.0-9 \n]/g, "").trim().split(/\n+/);
    let text = "";
    let balance = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i].trim().replace(/\s+/g, " ").split(/\s+/);

        balance -= Number(temp[2]);
        text += `${temp.slice(0,2).join(" ")} ${Number(temp[2]).toFixed(2)} Balance ${balance.toFixed(2)}\r\n`;
    }

    let sum = arr
        .slice(1, arr.length)
        .map(a => Number(a.split(/\s+/)[2]))
        .reduce((a, b) => a + b);

    let average = sum / (arr.length - 1);

    return `Original Balance: ${Number(arr[0]).toFixed(2)}\r\n`
        + text
        + `Total expense  ${sum.toFixed(2)}\r\n`
        + `Average expense  ${average.toFixed(2)}`

}
