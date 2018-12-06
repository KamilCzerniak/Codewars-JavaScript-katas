let createIterator = function (func, n) {
    return function (num) {
        for (let i = 0; i < n; i++) {
            num = func(num);
        }
        return num;
    }
};