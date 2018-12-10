function fruit(reels, spins) {
    let items = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
    let reel = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]]
    let res = 0;

    if ([...new Set(reel)].length === 2) {
        let temp = "";
        for (let i = 0; i < reel.length; i++) {
            if (reel[i] === reel[(i + 1) % reel.length]) {
                temp = reel[i];
            }
        }

        let score = 10 - items.indexOf(temp);
        res = reel.includes("Wild") && !temp.match("Wild") ? 2 * score : score;

    } else if ([...new Set(reel)].length === 1) {
        res = 100 - items.indexOf(reel[0]) * 10;
    }
    return res;
}