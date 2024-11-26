//CREATE A SIMPLE NODE FOR RECURSIVE TIMEOUT
const myFunction=()=>{
    console.log('hello');
    setTimeout(myFunction,1000);
}
setTimeout(myFunction,1000);