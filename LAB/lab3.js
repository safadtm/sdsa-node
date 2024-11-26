// CREATE A SIMPLE NODE PROGRAM FOR EVENT LOOP
const bar=()=>console.log('bar');
const baz=()=>console.log('baz');
const foo=()=>{
    console.log('foo');
    bar();
    baz();
}
foo();