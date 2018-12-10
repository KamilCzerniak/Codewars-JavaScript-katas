function maxPizza(cut) {
    return cut < 0 ? -1 : 1 + ((1 + cut) * cut) / 2;
}