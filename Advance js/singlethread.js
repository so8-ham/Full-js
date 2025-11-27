//at a one time js execute a single task thats why it is single threaded language..
//syncronous
setTimeout(()=>{
    console.log("timer done");
}, 2000);
console.log("hello....");