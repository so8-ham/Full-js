let sum=23;//global scope...

function calSum(a,b){//Function Scope...
    let sum=a+b;
    console.log("sum is=",sum);
}
calSum(10,20);