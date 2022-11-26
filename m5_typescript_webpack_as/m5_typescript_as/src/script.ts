import { GuidePerson } from "./module";


const button_book = document.getElementById("clickbook");
const button_tour_guide = document.getElementById("clicktourguide");
const first_name = document.getElementById("fname")! as HTMLInputElement;
const last_name = document.getElementById("lname")! as HTMLInputElement;
const email = document.getElementById("email")! as HTMLInputElement;
const trip_num = document.getElementById("tripno")! as HTMLInputElement;


// when there is no class methods, I can use type or class
class Person {
    private firstName : string = "none";
    private lastName : string = "none";
    private email : string = "none";
    private trip_num : number;
    constructor(firstName : string, lastName : string, email: string, trip_num : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.trip_num = trip_num;
    }
}

type PersonType = {
    firstName : string,
    lastName : string,
    email: string,
    trip_num: number 
};

// Create an array to store current input guest information
var person_list : Array<PersonType> = [];

function add_new_person(curr_person : PersonType) {
    person_list.push(curr_person);
}

// showcase new added guest information
button_book.addEventListener("click", function() {
    var curr_person : PersonType = {
        firstName : first_name.value,
        lastName : last_name.value,
        email : email.value,
        trip_num: +trip_num.value
    }
    first_name.value = ''
    last_name.value = ''
    email.value = ''
    trip_num.value = ''
    add_new_person(curr_person)
    console.log(curr_person)
    alert(`Hello, new guest added: ${curr_person.firstName} ${curr_person.lastName}`)
    console.log("whole group:", person_list)
})

// Showcase tour guide information
const p1 = new GuidePerson("Sonia", "Sun")
const p2 = new GuidePerson("David", "Wang")

button_tour_guide.addEventListener("click", function(){
    p1.greet()
})


