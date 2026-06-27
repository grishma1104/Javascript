// Filter Employees salary

const emp=[
    {id:1,name:"John",salary:50000},
    {id:2,name:"Jane",salary:60000},
    {id:3,name:"Jack",salary:70000},
    {id:4,name:"Jill",salary:80000},
    {id:5,name:"Jerry",salary:90000}
];
const filteredEmp = emp.filter((employee) => employee.salary > 70000);
console.log(filteredEmp);

//Q8
//total sales from an array of objects
const sales = [
    {product:"watch",price:2300},
    {product:"IPhone",price:45000},
    {product:"Samsung",price:34000},
    {product:"Laptop",price:56000},
];

const totalSales =sales.reduce((total,sale)=>{
    return total + sale.price;
},0);
console.log(totalSales);