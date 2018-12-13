function windComponents(rwy, windDirection, windSpeed) {
    let A = windDirection - Number(rwy.replace(/[^0-9]/g, "")) * 10;
    let CW = Math.round(Math.sin(A * Math.PI / 180) * windSpeed);
    let HW = Math.round(Math.cos(A * Math.PI / 180) * windSpeed);
    return `${HW < 0 ? "Tail" : "Head"}wind ${Math.abs(HW)} knots. Crosswind ${Math.abs(CW)} knots from your ${CW < 0 ? "left" : "right"}.`
}


