function removeEveryOther(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            temp.push(arr[i])
        }
    }
    return temp;
}
