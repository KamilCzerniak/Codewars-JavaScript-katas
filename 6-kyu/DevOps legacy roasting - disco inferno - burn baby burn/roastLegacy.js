function roastLegacy(workloads) {

    let map = new Map();
    map.set("cobol", 1000);
    map.set("nonobject", 500);
    map.set("monolithic", 500);
    map.set("fax", 100);
    map.set("modem", 100);
    map.set("thickclient", 50);
    map.set("tape", 50);
    map.set("floppy", 50);
    map.set("oldschoolit", 50);

    let complain = ["slow!", "expensive!", "manual!", "down!", "hostage!", "security!"];

    let points = 0;
    let complaints = 0;

    let valueIter = map.values();
    let keyIter = map.keys();

    for (let i = 0; i < map.size; i++) {
        let temp = keyIter.next().value;
        points += (workloads.length - workloads.toLowerCase().split(temp).join("").length) / temp.length * valueIter.next().value;
    }

    for (let i = 0; i < complain.length; i++) {
        complaints += (workloads.length - workloads.toLowerCase().split(complain[i]).join("").length) / complain[i].length;

    }

    return points === 0 && complaints === 0
        ? "These guys are already DevOps and in the Cloud and the business is happy!"
        : `Burn baby burn disco inferno ${points} points earned in this roasting and ${complaints} complaints resolved!`;

}
