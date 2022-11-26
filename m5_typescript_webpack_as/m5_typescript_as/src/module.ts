
export interface IGuide_Person {
    firstName : string;
    lastName : string;
    email? : string;
    greet(): void;
}

export function getGreeting(person : IGuide_Person) {
    alert (`Hello, This is our guide ${person.firstName} ${person.lastName},
            His or Her contact email is ${person.email}`)
}

export class GuidePerson implements IGuide_Person{
    firstName : string;
    lastName : string;
    constructor(inFirstName : string, inLastName : string) {
        this.firstName = inFirstName;
        this.lastName = inLastName;
    }
    greet() {
        alert(`Hello, this is our tour guide ${this.firstName} ${this.lastName}`)
    }
}

const p1 = new GuidePerson("Sonia", "Sun")
const p2 = new GuidePerson("David", "Wang")




