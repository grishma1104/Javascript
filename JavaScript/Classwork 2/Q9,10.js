// User defined Exception
class InvalidAge extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAge";
    }
}
function Validate(age) {
    if (age <20){
        try {
            throw new InvalidAge("Age must be greater than 20");
        } catch (error) {
            console.log(error.name + ":" + error.message);
        }
    } else {
        console.log("Valid Age");
    }
}Validate(19);
