const button_book = document.getElementById("clickbook");
const first_name = document.getElementById("fname")! as HTMLInputElement;
const last_name = document.getElementById("lname")! as HTMLInputElement;
const email = document.getElementById("email")! as HTMLInputElement;
const trip_num = document.getElementById("tripno")! as HTMLInputElement;



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


var person_list : Array<PersonType> = [];


function add_new_person(curr_person : PersonType) {
    person_list.push(curr_person);
}


button_book.addEventListener("click", () => {
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
    console.log("whole group:", person_list)
})

