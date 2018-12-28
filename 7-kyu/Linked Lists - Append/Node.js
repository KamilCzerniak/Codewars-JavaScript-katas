function Node(data) {
    this.data = data;
    this.next = null;
}

function append(listA, listB) {
    if (listA === null && listB === null) {
        return null;
    } else if (listA === null) {
        return listB;
    } else if (listB === null) {
        return listA;
    }
    let p = listA;
    while (p.next !== null) {
        p = p.next;
    }
    p.next = listB;

    return listA;
}