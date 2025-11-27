const student={
    Name:"Soham",
    Roll:7,
    subject:"Math",
    Marks:89,
}
for(let key in student){
    console.log(key + ": " + student[key]);
}


const item={
    price: 500,
    discount: 15,
    color: ["red","blue","green"]
}
for(let key in item){
    console.log(key + ": " + item[key]);
}