function fromNb2Str(n, sys) {

    if (sys.reduce((a, b) => a * b) < n || isNotApplicable(sys)) {
        return "Not applicable";
    }

    return "-" + sys.map(a => n % a).join("--") + "-";


    function gcb(a, b) {
        return b === 0 ? a : gcb(b, a % b);
    }


    function isNotApplicable(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (gcb(arr[i], arr[j]) !== 1) {
                    return true;
                }
            }
        }
        return false;
    }
}