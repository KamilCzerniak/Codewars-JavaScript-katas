function grader(score) {
    return score === 1 ? "A" : "FFFFFFDCBA"[Math.floor(score * 10) % 10];
}
