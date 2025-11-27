let arr=[1,2,3,4,5,6,7,8];
let max=-1;
let maximum=arr.reduce(
    (acc,el)=>{
        if(el>acc){
            return el;
        }
        return acc;
    }
)
console.log(maximum);