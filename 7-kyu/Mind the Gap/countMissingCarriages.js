function countMissingCarriages(train) {
    return train.slice(-1).charCodeAt(0) - "A".charCodeAt(0) - train.length + 1;
}