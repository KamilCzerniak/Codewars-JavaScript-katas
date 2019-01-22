function multipleOfIndex(array) {
    return array.filter((number, index) => number % index === 0);
}