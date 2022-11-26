

import { GuidePerson } from "/module.js";
var button_book = document.getElementById("clickbook");
var button_tour_guide = document.getElementById("clicktourguide");
var first_name = document.getElementById("fname");
var last_name = document.getElementById("lname");
var email = document.getElementById("email");
var trip_num = document.getElementById("tripno");
// when there is no class methods, I can use type or class
var Person = /** @class */ (function () {
    class Person {
        constructor(firstName, lastName, email, trip_num) {
            this.firstName = "none";
            this.lastName = "none";
            this.email = "none";
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.trip_num = trip_num;
        }
    }
    return Person;
}());
// Create an array to store current input guest information
var person_list = [];
function add_new_person(curr_person) {
    person_list.push(curr_person);
}
// showcase new added guest information
button_book.addEventListener("click", function () {
    var curr_person = {
        firstName: first_name.value,
        lastName: last_name.value,
        email: email.value,
        trip_num: +trip_num.value
    };
    first_name.value = '';
    last_name.value = '';
    email.value = '';
    trip_num.value = '';
    add_new_person(curr_person);
    console.log(curr_person);
    alert("Hello, new guest added: ".concat(curr_person.firstName, " ").concat(curr_person.lastName));
    console.log("whole group:", person_list);
});
// Showcase tour guide information
var p1 = new GuidePerson("Sonia", "Sun");
var p2 = new GuidePerson("David", "Wang");
button_tour_guide.addEventListener("click", function () {
    p1.greet();
});
