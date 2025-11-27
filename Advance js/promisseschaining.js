function saveToDBPromise(){
    return new Promise((success,failure)=>{
          let internetSpeed=Math.floor(Math.random()*100)+1;
          if(internetSpeed>50){
            success("data save to db");
          }
          else{
            failure("internet is slow");
          }
    });

}
saveToDBPromise("apnaCollege")
.then((success)=>{
    console.log("promisess1 resolved");
    return saveToDBPromise("hello World");
})
.then((success)=>{
    console.log("promisess2 resolved");
})
.catch((failure)=>{
    console.log("some promisess rejected");
});