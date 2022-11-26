
export { _GuidePerson as GuidePerson };
function getGreeting(person) {
    alert("Hello, This is our guide ".concat(person.firstName, " ").concat(person.lastName, ",\n            His or Her contact email is ").concat(person.email));
}
const _getGreeting = getGreeting;
export { _getGreeting as getGreeting };
var GuidePerson = /** @class */ (function () {
    function GuidePerson(inFirstName, inLastName) {
        this.firstName = inFirstName;
        this.lastName = inLastName;
    }
    GuidePerson.prototype.greet = function () {
        alert("Hello, this is our tour guide ".concat(this.firstName, " ").concat(this.lastName));
    };
    return GuidePerson;
}());
const _GuidePerson = GuidePerson;

var p1 = new GuidePerson("Sonia", "Sun");
var p2 = new GuidePerson("David", "Wang");
