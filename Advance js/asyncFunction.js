//  async function greet(){
//     return "hello";
// }
// greet();

// let app= async (Greet)=>{
//     return Greet;
// }
// app(greet());

async function fetchData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await response.json();
    console.log(data);
}
fetchData()
.then(()=>{
    console.log('data fetched successfully');
})
.catch(()=>{
    console.log("some error occured");
});

