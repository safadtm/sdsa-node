// CREATE A NODE PROGRAM TO DEMOSTRATE AYNCHRONOUS EVENT LOOP-CALLBACK QUEUE
const bar=()=>console.log('bar')
const baz=()=>console.log('baz')
const foo=()=>{
    console.log('foo')
    setTimeout(bar,1000)
    baz()
}
foo()
