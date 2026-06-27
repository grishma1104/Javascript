// Array destructuring

const clothing=["Tops","Jeans","Skirts","Gowns"];
const[p1,p2,p3,p4]=clothing;
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

const product1={
    fabric: "Cotton",
    size: 30,
    colour:"Pink"
}

const product2={
    fabric: "Denim",
    size: 40,
    colour:"Blue"
}

const product3={
    fabric: "Polyster",
    size: 20,
    colour:"White"
}

const[fabric,size,colour]= product1;
console.log(fabric);
console.log(size);
console.log(colour);