const sum=(a,b)=>{
    return a+b;
}
console.log(sum(200,600));

const arr=[10,20,30,40,50];
for(elem of arr){
    total=(elem,n)=>{
        return elem+n;
    }
    console.log(total(elem,5));
}
//implicit return..
const multiply=(x,y)=>(x*y);

console.log(multiply(5,6));

