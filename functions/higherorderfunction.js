//passing func as an argument...
function multipleGreet(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multipleGreet(greet,5);




function OddEvenFactory(request){
  if(request=="odd"){
   return function(n){
        console.log(!(n%2==0));
    }

    } else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
       
    }
    else{
        console.log("invalid");
    }
  }
  let request="odd";
  let func=OddEvenFactory(request);
  console.log(func);

