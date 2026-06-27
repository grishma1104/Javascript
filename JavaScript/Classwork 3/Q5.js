// default parameter
function add(a,b=10){
    console.log(a+b);
}
add(10);


// rest parameter
function findMax(){
    const c = [10,20,30,40];
    return Math.max(...c);
}
console.log(findMax());