deadAntCount = function (ants) {

    if (ants === null) {
        return 0;
    }
    let graveyard = ants.replace(/ant/g, "");
    let ant = "ant";
    let cnt = [];

    for (let i = 0; i < ant.length; i++) {
        cnt.push(graveyard.split("").filter(a => a === ant[i]).length);
    }
    return Math.max(cnt[0], cnt[1], cnt[2]);
};