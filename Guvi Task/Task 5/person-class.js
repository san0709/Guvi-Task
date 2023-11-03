class Person {
    constructor(dateOfBirth, firstName, lastName, bloodGroup) {
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bloodGroup = bloodGroup;
    }
}
class Profession extends Person {
    constructor(dateOfBirth, firstName, lastName, bloodGroup, occupation) {
        super(dateOfBirth, firstName, lastName, bloodGroup)
        this.occupation = occupation;
    }
    set Occupation(occupation) { 
        this._occupation = occupation;
    }

}
const person1 = new Person("07 /06 / 1997", "Sandhiya", "Kishorekumar", "A+");
person1.Occupation="Full Stack Developer";