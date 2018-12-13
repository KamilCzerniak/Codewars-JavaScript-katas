class Dinglemouse {

    constructor() {
        this.map = new Map();
    }

    setAge(age) {
        this.map.set("age", ` I am ${age}.`);
        return this
    }

    setSex(sex) {
        this.map.set("sex", ` I am ${sex === 'M' ? "male" : "female"}.`);
        return this
    }

    setName(name) {
        this.map.set("name", ` My name is ${name}.`);
        return this
    }

    hello() {
        let text = "Hello.";
        let iterator = this.map.values();
        for (let i = 0; i < this.map.size; i++) {
            text += iterator.next().value;
        }
        return text;
    }
}
