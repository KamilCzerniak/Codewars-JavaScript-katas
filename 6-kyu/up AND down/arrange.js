function arrange(strng) {
    let arr = strng.split(" ");
    let temp;

    for (let i = 0; i < arr.length - 1; i++) {
        if ((i % 2 === 0 && arr[i].length > arr[i + 1].length)
            || i % 2 !== 0 && (arr[i].length < arr[i + 1].length)) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i % 2 === 0 ? arr[i].toLowerCase() : arr[i].toUpperCase();
    }

    return arr.join(" ");
}