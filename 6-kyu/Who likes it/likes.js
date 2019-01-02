function likes(names) {
    let temp;
    switch (names.length) {
        case 0: {
            temp = "no one";
            break;
        }
        case 1: {
            temp = names[0];
            break;
        }
        case 2: {
            temp = `${names[0]} and ${names[1]}`;
            break;
        }
        case 3: {
            temp = `${names[0]}, ${names[1]} and ${names[2]}`;
            break;
        }
        default: {
            temp = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
            break;
        }
    }
    return `${temp} ${names.length < 2 ? "likes" : "like"} this`;
}