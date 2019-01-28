function simpleTransposition(text) {
    return text.split("").filter((s, i) => i % 2 === 0).join("")
        + text.split("").filter((s, i) => i % 2 !== 0).join("");
}
