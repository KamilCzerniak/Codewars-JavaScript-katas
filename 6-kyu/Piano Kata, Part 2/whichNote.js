function whichNote(keyPressCount) {
    let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    return notes[((keyPressCount - 1) % 88) % 12];
}
