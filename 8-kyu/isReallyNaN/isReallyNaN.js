const isReallyNaN = (val) => {
    return val !== "NaN" && String(val) === "NaN";
};
