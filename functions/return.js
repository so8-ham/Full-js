let str=["hi","hello","welcome","bye"];

let c=function concat(str){
 let result="";
 for(let i=0;i<=str.length-1;i++){
    result+=str[i]+" ";
 }
 return result;
}
console.log(c(str));