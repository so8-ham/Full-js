let arr=[1,2,3,4,5];
let sum=arr.reduce(
    (acc,el)=>{
        return acc+el;
    }
)
console.log(sum);