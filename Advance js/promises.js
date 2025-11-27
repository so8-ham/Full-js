function saveTodb(){
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
saveTodb("apna College").then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message);
});