function winner(deckSteve, deckJosh) {
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let stevePoints = 0;
    let joshPoints = 0;

    for (let i = 0; i < deckSteve.length; i++) {

        if (cards.indexOf(deckSteve[i]) > cards.indexOf(deckJosh[i])) {
            stevePoints++;
        } else if (cards.indexOf(deckSteve[i]) < cards.indexOf(deckJosh[i])) {
            joshPoints++;
        }


    }
    return stevePoints > joshPoints
        ? `Steve wins ${stevePoints} to ${joshPoints}`
        : stevePoints < joshPoints
            ? `Josh wins ${joshPoints} to ${stevePoints}`
            : "Tie";

}