//! the function itself has to have a type!
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(getSum(1, 4));
//! This method does not catch NaN
console.log(mySum("3", 5));
// console.log(mySum('3','Hello'))
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getName("John", "Doe"));
//Optional will return an undefined, check for undefined
var getNameOptional = function (firstName, lastName) {
    return lastName == undefined ? firstName : firstName + " " + lastName;
};
// console.log(getNameOptional("Joe"));
console.log(getNameOptional("Joe"));
// Void can return nothing
var myVoid = function () {
    return;
};
