function pointsPer48(ppg, mpg) {
    return mpg ? Number(((ppg * 48) / mpg).toFixed(1)) : 0;

}