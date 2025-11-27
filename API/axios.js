
// let btn=document.querySelector('button');
// btn.addEventListener('click', async ()=>{
//     let facts= await getfact();
//     let p=document.querySelector('#select');
//     p.innerText = facts.data.fact;
// });
// let url='https://catfact.ninja/fact';
// async function getfact(){
//     try{
//  let res= await axios.get(url);
//    return res;
//     } catch(e){
//         return e;
//     }
// }


//dogs API
let btn=document.querySelector('button');
btn.addEventListener('click',async ()=>{
   let dogs=await getdogs();
   let img=document.querySelector('img');
   img.src=dogs.data.message;
});
let url='https://dog.ceo/api/breeds/image/random';
async function getdogs(){
    try{
        let res=await axios.get(url);
        return res;
    } catch(e){
        return e;
    }
}