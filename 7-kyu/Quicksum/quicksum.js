function quicksum(packet) {

    if (packet.replace(/[A-Z ]/g, "").length !== 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < packet.length; i++) {
        if (packet.charAt(i) !== " ") {
            sum += (packet.charCodeAt(i) - "A".charCodeAt(0) + 1) * (i + 1);
        }
    }
    return sum;
}