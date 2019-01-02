function numberGenerator() {

    let numbers = [];
    while (numbers.length < 6) {
        let digit = Math.floor(Math.random() * 49) + 1;
        if (!numbers.includes(digit)) {
            numbers.push(digit);
        }
    }

    numbers.sort((a, b) => a - b).push(Math.floor(Math.random() * 10));
    return numbers;
}

function checkForWinningCategory(checkCombination, winningCombination) {

    let matchCnt = 0;
    let superzahlMatch = false;

    if (checkCombination[6] === winningCombination[6]) {
        superzahlMatch = true;
    }

    for (let i = 0; i < checkCombination.length - 1; i++) {
        for (let j = 0; j < winningCombination.length - 1; j++) {
            if (checkCombination[i] === winningCombination[j]) {
                matchCnt++;
            }
        }
    }

    switch (matchCnt) {
        case 6: {
            return superzahlMatch ? 1 : 2;
        }
        case 5: {
            return superzahlMatch ? 3 : 4;
        }
        case 4: {
            return superzahlMatch ? 5 : 6;
        }
        case 3: {
            return superzahlMatch ? 7 : 8;
        }
        case 2: {
            return superzahlMatch ? 9 : -1;
        }
        default: {
            return -1;
        }
    }
}

