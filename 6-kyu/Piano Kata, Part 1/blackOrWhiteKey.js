function blackOrWhiteKey(keyPressCount) {
    return "wbwwbwbwwbwb".charAt(((keyPressCount - 1) % 88) % 12)
        .replace("w", "white")
        .replace("b", "black");
}
