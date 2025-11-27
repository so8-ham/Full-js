//for loop..
let arr=[1,2,3,4,5];
for(let i=0;i<10;i++){
    arr.push(i);
}
console.log(arr);
//while loop...
// let arr2=[];
// let i=0;
// while(i<10){
//     arr2.push(i);
//     i++;
// }
// console.log(arr2);
// //do while loop...
// let arr3=[];
// let j=0;
// do{
//     arr3.push(j);
//     j++;
// }while(j<10);
// console.log(arr3);
// arr3.push(arr2);
// arr.push(arr3);
// console.log(arr);
//for in loop
for(let i in arr){
    console.log(arr[i]);
}
//for of loop;
let array=['soham','rahul','sourav'];
for(let value of array){
    console.log(value);
}
//for off with string..
let str="Hello World";
for(let char of str){
    console.log(char);
}
//for in with object...
const obj={
    Name:"soham",
    age:23,
    city:"Kolkata"
}
for(let key in obj){
    console.log(key + ": " + obj[key]);
}
//for of with map and set..
const map=new Map(
    [['a',1],
    ['b',2],
    ['c',3]]
)
for(let [key,value] of map){
    console.log(key + ": " + value);
}
const set=new Set([1,2,3,4,5]);
for(let value of set){
    console.log(value);
}