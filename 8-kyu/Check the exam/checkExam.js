function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i].length !== 0) {
            score += array1[i] === array2[i] ? 4 : -1;
        }
    }
    return score > 0 ? score : 0;
}