let arr=[2,5,7,8,2];
console.log(arr);
arr.push(9);
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(1));
console.log(arr);
console.log(arr.length);
console.log(arr.indexOf(5));
console.log(arr.slice(1,4));
console.log(arr.includes(7));
console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.join("-"));
console.log(...arr);
console.log(Array.isArray(arr));
console.log(arr.splice(2,2,10,11));
console.log(arr);
console.log(arr.fill(0,1,4));
console.log(arr.concat([12,13,14]));
console.log(arr);
console.log(arr.map((value)=>value*2));
console.log(arr.filter((value)=>value>5));
console.log(arr.reduce((acc,cur)=>acc+cur,0));
console.log(arr.forEach((value)=>console.log(value)));
console.log(arr.find((value)=>value>5));
console.log(arr.findIndex((value)=>value>5));
console.log(arr.every((value)=>value>2));
console.log(arr.some((value)=>value>4));
console.log(arr.sort((a,b)=>a-b));


let info=["sradha",24,89,"good Girl"];
console.log(info);

let mixed=[
    {
        Name:"soham",
        age: 23,
        city:"Kolkata",
    },
    {
             Name:"Rajasree",
             age:22,
             city:"Mumbai"
    }
]
console.log(mixed[0].age < mixed[1].age);

console.log(arr.slice(-3));
