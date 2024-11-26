// CREATE A SIMPLE NODE FOR DEMONSTRATING SET TIMEOUT
// QUESTION:print the following ‘hellow after 5 seconds’ and ‘hellow after 10 seconds’ one condition is
//that use only one function
const myFunction=delay=>{
    console.log("Hello after "+delay+" seconds");
}
setTimeout(myFunction,5000,"five");
setTimeout(myFunction,10000,"ten");