Plugboard = function (wires) {

    if (wires === undefined) {
        wires = "";
    } else if (wires.length % 2 !== 0
        || wires.length > 20
        || [...new Set(wires)].length !== wires.length) {
        throw "Invalid Plugboard Wires Exception"
    }
    let map = new Map();

    for (let i = 0; i < wires.length - 1; i += 2) {
        map.set(wires[i], wires[i + 1]);
        map.set(wires[i + 1], wires[i]);

    }

    this.process = function (wire) {
        return map.has(wire) ? map.get(wire) : wire;
    }
};

