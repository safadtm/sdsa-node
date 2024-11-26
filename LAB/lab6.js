// CREATE A SIMPLE NODE FOR DEMONSTRATING SET INTERVAL TIMER
// QUESTION:print ‘hellow world’every second and stop after 5times, after 5 times print ‘Done’ .
let counter =0;
const myFunction=()=>{
    console.log('hello world');
    counter=counter+1;

    if(counter==5){
        console.log('Done')
        clearInterval(timerId);
    }
};

const timerId = setInterval(myFunction,1000);