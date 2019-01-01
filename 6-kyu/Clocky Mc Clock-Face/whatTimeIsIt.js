var whatTimeIsIt = function (angle) {
    let minutes = Math.floor(angle * 2) % 60;
    let hours = Math.floor(angle / 30);
    return getFormattedTime(hours === 0 ? 12 : hours) + ":" + getFormattedTime(minutes);

    function getFormattedTime(num) {
        return num.toString().length < 2 ? "0" + num.toString() : num.toString();
    }
};