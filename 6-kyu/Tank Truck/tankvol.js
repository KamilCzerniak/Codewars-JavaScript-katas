function tankvol(h, d, vt) {
    let r = d / 2;
    let H = vt / (Math.PI * Math.pow(r, 2));
    return Math.floor(((((Math.PI * Math.pow(r, 2) * Math.acos(1 - (h / r))) / Math.PI)) - (r - h) * Math.sqrt(2 * h * r - Math.pow(h, 2))) * H);
}

