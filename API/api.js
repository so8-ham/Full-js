//json.parse() is used to convert the response into json format
//ftch() is used to fetch the data from the api
//json.stringify() is used tto convert the data into string fromat
let json='{"fact":"The cat has 500 skeletal muscles (humans have 650).","length":51}';
let obj=JSON.parse(json);
console.log(obj.fact);
setTimeout(()=>{
let c=fetch('https://catfact.ninja/fact');
c.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data.fact);
}).catch((err)=>{
    console.log("some error occured");
});
},2000);

let data={
    name:"John",
    age:30,
    city:"kolkata"
}
let jsondata=JSON.stringify(data);
console.log(jsondata);


