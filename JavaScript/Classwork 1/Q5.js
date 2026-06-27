//map 
const arr = [1, 2, 3, 4, 5];
const a = arr.map((num) => {
    return num * 2;
});
console.log(a);

// filter 
const b = arr.filter((num) => {
    return num % 2 === 0;
});
console.log(b);

// reduce
const c = arr.reduce((acc, num) => {
    return acc + num;
}, 0);
console.log(c);

