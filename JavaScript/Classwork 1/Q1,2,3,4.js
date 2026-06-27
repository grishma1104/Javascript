//Q1
const person = {
    name: "John",
    age: 30,
    gender: "Male"
}
console.log(person.name);
console.log(person.age);
console.log(person.gender);

//Q2
const square = (side) => {
    return side * side;
}
console.log(square(5));

//Q3
const MBT = function (num) {
    return num * 2;
}
console.log(MBT(5));

//Q4
const arr =[23,34,45,56];
const filteredEvens = arr.filter((num) => {
    return num % 2 == 0;
});
console.log(filteredEvens);

