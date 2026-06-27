//Promise
function payment(status){
    return new Promise((resolve,reject)=>{
        if(status){
            resolve("Payment successful")
        }
        else{
            reject("Not done")
        }
    })
}



payment(false).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
    
});