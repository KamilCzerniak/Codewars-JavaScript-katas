function well(x) {
    const cnt = x.filter(a => a === "good").length;
    return cnt === 0 ? "Fail!" : cnt < 2 ? "Publish!" : "I smell a series!";
}