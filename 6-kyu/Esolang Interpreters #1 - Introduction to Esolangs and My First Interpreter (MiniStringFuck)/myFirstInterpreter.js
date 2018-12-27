function myFirstInterpreter(code) {

    let res = "";
    let cnt = 0;
    let temp = code.replace(/[^+.]/g, "");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === "+") {
            cnt = (cnt + 1) % 256;
        } else {
            res += String.fromCharCode(cnt)
        }

    }
    return res;
}