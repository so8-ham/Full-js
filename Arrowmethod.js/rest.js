let sum=[3,4,6,72,1];
const add=(...sum)=>{
    for(let i=0;i<sum.length;i++){
        console.log(sum[i]);
    }
}
console.log(add(...sum));
