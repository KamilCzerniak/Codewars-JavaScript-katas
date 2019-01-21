const toUnderScore = name => {

    function insert(str, index) {
        return str.substr(0, index) + "_" + str.substr(index);
    }

    let res = name;
    for (let i = 0; i < res.length - 1; i++) {
        let temp = res.slice(i, i + 2);
        if (/\d[A-Z]|[A-Za-z]\d|[a-z][A-Z]|[A-Z][A-Z]/.test(temp)) {
            res = insert(res, i + 1);
            i++;
        }
    }
    return res;
};
