const cannonsReady = (gunners) => {
    return Object.values(gunners).every(a => a === 'aye') ? "Fire!" : "Shiver me timbers!";
};