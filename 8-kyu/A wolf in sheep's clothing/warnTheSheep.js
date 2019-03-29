function warnTheSheep(queue) {
    const sheepNumber = length - queue.indexOf('wolf') - 1;
    return sheepNumber === 0 ?
        "Pls go away and stop eating my sheep" :
        `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;

}
