function balanceStatements(list) {

    if (list.length() === 0) {
        return "Buy: 0 Sell: 0";
    }

    let arr = list.split(", ");
    let badOrders = [];
    let sell = 0;
    let buy = 0;

    for (let s of arr) {
        if (s.match(/[A-Z0-9.]+\s\d+\s\d*\.\d+\s[SB]/)) {
            let order = s.split(" ");
            let num = Math.round(Number(order[1]) * Number(order[2]));
            if (order[3] === "S") {
                sell += num;
            } else if (order[3] === "B") {
                buy += num;
            }
        } else {
            badOrders.push(s);
        }

    }

    return badOrders.length === 0
        ? `Buy: ${buy} Sell: ${sell}`
        : `Buy: ${buy} Sell: ${sell}; Badly formed ${badOrders.length}: ${badOrders.join(" ;")} ;`;

}