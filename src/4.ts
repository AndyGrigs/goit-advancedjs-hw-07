class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature
    }
}


class Person {
    constructor(private key: Key){
        this.key = key
    }

    getKey(): Key {
        return this.key;
    }
}

class House {
    constructor(private key: Key) {
        this.key = key;
    }
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            console.log('Door opened');
        } else {
            console.log('Door not opened');
        }
    }
}

class MyHouse extends House {
 
    comeIn(person: Person): void {
        console.log(`${person} came in the house`);
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};