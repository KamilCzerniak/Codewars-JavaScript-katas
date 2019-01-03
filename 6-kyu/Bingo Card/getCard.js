function getCard() {

    let bingo = "BINGO";
    let res = [];

    for (let i = 0; i < bingo.length; i++) {
        let num = [];
        for (let j = 1 + i * 15; j <= i * 15 + 15; j++) {
            num.push(j);

        }

        for (let k = 0; k < (i === 2 ? 4 : 5); k++) {
            res.push(bingo[i] + num.splice(Math.floor(Math.random() * (15 - k)), 1));
        }

    }
    return res;

}

